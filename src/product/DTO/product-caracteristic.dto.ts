import { IsString } from "class-validator";

export class ProductCaracteristicDTO{
    @IsString()
    name: string;

    @IsString()
    description: string;
}