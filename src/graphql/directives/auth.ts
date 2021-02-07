import { ForbiddenError } from 'apollo-server-express';
import {
  defaultFieldResolver,
  GraphQLField,
  GraphQLObjectType,
  GraphQLInterfaceType,
} from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import admin from 'firebase-admin';

type ObjectType = {
  fieldWrapped: boolean;
} & (GraphQLObjectType | GraphQLInterfaceType);

interface Args {
  admin?: boolean;
}

/* from: https://github.com/ardatan/graphql-tools/issues/858#issuecomment-500170481 */
class AuthDirective extends SchemaDirectiveVisitor {
  private _mutations: GraphQLField<any, any>[];

  getMutations(predicate = null) {
    if (!this._mutations) {
      this._mutations = Object.values(
        this.schema.getMutationType().getFields()
      );
    }
    if (!predicate) {
      return this._mutations || [];
    }
    return this._mutations.filter(console.log);
  }

  visitInputFieldDefinition(field, { objectType }) {
    const { name, defaultValue } = field;
    addAuthInfoToDescription(field, this.args);
    const mutationsForInput = this.getMutations(({ args = [] }) => {
      return args.find(
        (arg) => arg && arg.type && arg.type.ofType === objectType
      );
    });

    mutationsForInput.forEach((mutation) => {
      const { resolve = defaultFieldResolver } = mutation;
      mutation.resolve = (...args) => {
        const params = args[1];
        // some lookup...
        const subKey = Object.values(params).find((el) => el && el[name]);
        if (
          params[name] !== defaultValue ||
          (subKey && subKey[name] !== defaultValue)
        ) {
          const context = args[2];
          //  throws an error if no auth
          ensureIsAuth(context, this.args, field);
        }
        return resolve.apply(this, args);
      };
    });
  }

  visitArgumentDefinition(argument, { field }) {
    const { name, defaultValue } = argument;
    const { resolve = defaultFieldResolver } = field;
    addAuthInfoToDescription(argument, this.args);
    field.resolve = (...args) => {
      const params = args[1];
      if (params[name] !== defaultValue) {
        const context = args[2];
        //  throws an error if no auth
        ensureIsAuth(context, this.args, field);
      }
      return resolve.apply(this, args);
    };
  }

  visitObject(type) {
    this.ensureFieldsWrapped(type);
    type.__auth = true;
    type.__args = this.args || {};
    addAuthInfoToDescription(type, this.args);
  }

  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    field.__auth = true;
    field.__args = this.args || {};
    addAuthInfoToDescription(field, this.args);
  }

  ensureFieldsWrapped(objectType: ObjectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType.fieldWrapped) return;
    objectType.fieldWrapped = true;

    const fields = objectType.getFields();

    Object.values(fields).forEach((field) => {
      const { resolve = defaultFieldResolver } = field;

      field.resolve = (...args) => {
        if (field['__auth'] || objectType['__auth']) {
          const context = args[2];
          //  throws an error if no auth
          ensureIsAuth(
            context,
            Object.assign({}, field['__args'], objectType['__args']),
            field
          );
        }

        return resolve.apply(this, args);
      };
    });
  }
}

function ensureIsAuth(
  { session }: { session: admin.auth.DecodedIdToken },
  args: Args,
  field: GraphQLField<any, any>
) {
  if (!session) {
    throw new ForbiddenError(
      `You must be logged in to access '${field.name}' field`
    );
  }

  if (args?.admin) {
    if (session.claims?.admin === true) {
      throw new ForbiddenError(
        `Not authorized to access '${field.name}' field`
      );
    }
  }
}

function addAuthInfoToDescription(field: GraphQLField<any, any>, args: Args) {
  field.description = `
  **${
    args && args.admin === true
      ? 'Admin access is needed'
      : 'Authorization is needed'
  }**\n\n
  ${field.description || ''}
`;
}

export const auth = AuthDirective;
