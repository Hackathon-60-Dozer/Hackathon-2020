import {prop} from "@typegoose/typegoose";

class AddressSchema {
  @prop()
  public administrative?: string

  @prop()
  public city?: string

  @prop()
  public country?: string

  @prop()
  public countryCode?: string

  @prop()
  public county?: string

  @prop()
  public lat?: number

  @prop()
  public lng?: number

  @prop()
  public postcode?: string

  @prop({ type: [String] })
  public postcodes?: string[]

  @prop()
  public value?: string
}

export default AddressSchema;
