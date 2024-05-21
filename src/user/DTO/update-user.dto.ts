import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/uniqueEmail.validator";

export class UpdateUserDTO{

    @IsNotEmpty({message: "O nome não pode ser vazio"})
    @IsOptional()
    name: string;

    @IsEmail(undefined, {message: "email informado é inválido"})
    @UniqueEmail({message: 'Já existe um usuáro com este e-mail'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: "A senha deve conter pelo menos 6 caracteres"})
    @IsOptional()
    password: string;
}