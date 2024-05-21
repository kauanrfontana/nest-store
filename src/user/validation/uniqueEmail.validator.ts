import { Injectable } from "@nestjs/common";
import { UserRepository } from './../user.repository';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userWithEmailExists = await this.userRepository.existsWithEmail(value);
    return !userWithEmailExists;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
    return (object: Object, propertie: string ) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertie,
            options: validationOptions,
            constraints: [],
            validator: UniqueEmailValidator
        });
    }
}