import { ApolloError } from 'apollo-server-express';
import { Resolver } from '@src/types';
import Joi from 'joi';
import { ShopInput } from '@src/types/inputs';
import { addressValidationSchema } from '@src/helpers/schemas';
import { ShopRequest } from '@src/models/Shop';
import User from '@src/models/User';

const schema = Joi.object({
  name: Joi.string().required(),
  address: addressValidationSchema,
  organisationName: Joi.string().required(),
  organisationSiret: Joi.string()
    .required()
    .custom(function (value: string) {
      function verify(number: string, size: number) {
        if (isNaN((number as unknown) as number) || number.length !== size) {
          return false;
        }
        let bal = 0;
        let total = 0;
        for (let i = size - 1; i >= 0; i--) {
          const step = (number.charCodeAt(i) - 48) * (bal + 1);
          total += step > 9 ? step - 9 : step;
          bal = 1 - bal;
        }
        return total % 10 === 0;
      }

      return verify(value.trim().split(' ').join(''), 14);
    }, 'valid-siret'),
  organisationSiege: addressValidationSchema,
  labels: Joi.array(),
});

export const addShop: Resolver<void, { input: ShopInput }> = async (
  _,
  { input },
  ctx
) => {
  let user;
  try {
    user = await User.findById(ctx.session.uid);
  } catch (e) {
    throw new ApolloError(e.message);
  }

  if (!user) {
    throw new ApolloError("Cet utilisateur n'existe pas");
  }
  if (user.shop) {
    throw new ApolloError("Vous êtes déjà propriétaire d'un commerce");
  }

  const {
    value: {
      organisationName,
      organisationSiret,
      organisationSiege,
      ...values
    },
    error,
  } = schema.validate(input);

  if (error) {
    throw new ApolloError(error.message, 'BadRequest');
  }

  const shop = new ShopRequest({
    ...values,
    organisation: {
      name: organisationName,
      siret: organisationSiret,
      siege: organisationSiege,
    },
    meta: {
      validated: false,
    },
    owner: user._id,
  });
  shop.labels = shop.labels.slice();
  await shop.save((err) => {
    if (err) throw err;
  });

  user.shop = shop._id;
  await user.save((err) => {
    if (err) throw err;
  });

  return;
};
