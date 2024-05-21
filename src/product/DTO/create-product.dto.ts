import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductCaracteristicDTO } from "./product-caracteristic.dto";
import { ProductImageDTO } from "./product-image.dto";

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsPositive()
  @Min(0.01)
  price: number;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsString()
  @MaxLength(1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCaracteristicDTO)
  caracteristics: ProductCaracteristicDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];

  @IsNotEmpty()
  @IsString()
  category: string;
}
