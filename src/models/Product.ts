import {prop} from "@typegoose/typegoose";

export class ProductDetailsSchema {
  @prop({ type: [String] })
  public mode?: string[];

  @prop({ type: [String] })
  public allergens?: string[];

  @prop()
  public alcohol?: boolean;
}

export class ProductMetaSchema {
  @prop()
  public available?: boolean;

}

class ProductSchema {
  @prop()
  public name?: string;

  @prop()
  public price?: number;

  @prop()
  public unit?: string

  @prop({ _id: false })
  public details?: ProductDetailsSchema;

  @prop({ _id: false })
  public meta?: ProductMetaSchema;
}

export default ProductSchema
