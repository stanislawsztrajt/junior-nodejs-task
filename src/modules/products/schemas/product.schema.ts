import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ type: String, required: true, maxlength: 100 })
  name: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Date })
  updateDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
