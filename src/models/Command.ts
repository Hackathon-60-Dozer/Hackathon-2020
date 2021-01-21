import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {UserSchema} from "@src/models/User";
import ProductSchema from "@src/models/Product";

export class CommandMetaSchema {
  @prop()
  public validated?: boolean;

  @prop()
  public collected?: boolean;

  @prop()
  public paid?: boolean;
}

export class CommandSchema {
  @prop({ ref: 'User '})
  public user?: Ref<UserSchema>;

  @prop({ _id: false })
  public products?: ProductSchema[];

  @prop()
  public collectDate?: Date;

  @prop()
  public price?: number;

  @prop()
  public paymentType?: string;

  @prop()
  public meta?: CommandMetaSchema
}

const Command = getModelForClass(CommandSchema)

export default Command;
