import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { listUserDTO } from './DTO/list-user.dto';
import { UpdateUserDTO } from "./DTO/update-user.dto";

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    const userEntity = new UserEntity(
      uuid(),
      user.name,
      user.email,
      user.password,
    );

    this.userRepository.create(userEntity);

    return {
      user: new listUserDTO(userEntity.getId(), userEntity.getName()),
      message: 'Success! User created!',
    };
  }

  @Get()
  async getUsers(): Promise<listUserDTO[]> {
    const users = await this.userRepository.get();
    const usersList = users.map(
      (user: UserEntity) => new listUserDTO(user.getId(), user.getName()),
    );
    return usersList;
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() userUpdatedData: UpdateUserDTO) {
    const user = await this.userRepository.update(id, userUpdatedData as Partial<UserEntity>);
    return{
      user: user,
      message: 'Success! User updated!'
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string){
    this.userRepository.delete(id);
    return {
      message: 'Success! User deleted!'
    }
  }
}
