import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async create(user: UserEntity) {
    this.users.push(user);
  }

  async get(): Promise<UserEntity[]>{
    return this.users;
  }

  async existsWithEmail(email: string): Promise<boolean>{
    const possibleUser = this.users.find(user => user.getEmail() == email);
    return possibleUser !== undefined;
  }

  private getById(id: string): UserEntity{
    const possibleUser = this.users.find(
      user => user.getId() == id
    )

    if(!possibleUser){
      throw new Error('User don\'t exits')
    }

    return possibleUser;
  }

  async update(id: string, userUpdated: Partial<UserEntity>): Promise<UserEntity>{
    const user = this.getById(id);

    Object.entries(userUpdated).forEach(([key, value]) => {
      if(key === 'id'){
        return;   
      }

      user[key] = value;
    })

    return user;
  }

  async delete(id: string){
    this.users = this.users.filter(user => user.getId() !== id);
  }

}
