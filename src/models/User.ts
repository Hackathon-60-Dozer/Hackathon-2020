import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {ShopSchema} from "@src/models/Shop";
import {Base} from "@typegoose/typegoose/lib/defaultClasses";

export class UserSchema extends Base<string> {
  @prop()
  public _id!: string;

  @prop({ required: true, unique: true })
  public uid!: string;

  @prop()
  public firstName?: string;

  @prop()
  public lastName?: string;

  @prop({ ref: 'Shop' })
  public shop?: Ref<ShopSchema>;
}

const User = getModelForClass(UserSchema, { schemaOptions: { _id: false } })

export default User;
