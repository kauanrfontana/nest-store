import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductCaracteristicDTO } from './product-caracteristic.dto';
import { ProductImageDTO } from './product-image.dto';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  userId: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsPositive()
  @Min(0.01)
  @IsOptional()
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  quantity: number;

  @IsString()
  @MaxLength(1000)
  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCaracteristicDTO)
  @IsOptional()
  caracteristics: ProductCaracteristicDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  category: string;
}
