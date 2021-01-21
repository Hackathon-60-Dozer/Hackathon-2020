import {User} from '@src/types';
import ProductSchema from '@src/models/Product';
import {CommandSchema} from '@src/models/Command';
import AddressSchema from '@src/models/Address';
import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {UserSchema} from "@src/models/User";

export class OrganisationSchema {
  @prop()
  public name?: string;

  @prop()
  public siret?: string;

  @prop({ _id: false })
  public siege?: AddressSchema;
}

export class ShopMetaSchema {
  @prop()
  public validated?: boolean;
}

export class ShopSchema {
  @prop()
  public name?: string;

  @prop({ _id: false })
  public address?: AddressSchema

  @prop({ _id: false })
  public organisation?: OrganisationSchema

  @prop({ ref: 'User' })
  public owner?: Ref<UserSchema>;

  @prop({ _id: false, type: [ProductSchema] })
  public products?: ProductSchema[];

  @prop({ ref: 'Command' })
  public commands?: Ref<CommandSchema>

  @prop({ type: [String] })
  public labels?: string[];

  @prop({ _id: false })
  public meta?: ShopMetaSchema;
}


const Shop = getModelForClass(ShopSchema)

export default Shop;
