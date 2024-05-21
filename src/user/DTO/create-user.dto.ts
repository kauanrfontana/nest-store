import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/uniqueEmail.validator";

export class CreateUserDTO{

    @IsNotEmpty({message: "O nome não pode ser vazio"})
    name: string;

    @IsEmail(undefined, {message: "email informado é inválido"})
    @UniqueEmail({message: 'Já existe um usuáro com este e-mail'})
    email: string;

    @MinLength(6, {message: "A senha deve conter pelo menos 6 caracteres"})
    password: string;
}