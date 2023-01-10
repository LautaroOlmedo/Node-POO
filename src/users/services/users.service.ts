import { BaseService } from "../../config/base.service";
import { UserEntity } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";
import { DeleteResult, UpdateResult } from "typeorm";

export class UsersService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  async findAll(): Promise<UserEntity[]> {
    return (await this.execRepository).find();
  }

  /* async findOne(id: string): Promise<UserEntity | null> {
    return (await this.execRepository).findOne({ id });
  }*/

  async create(body: UserDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body);
  }

  async update(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async delete(id: string, body: any): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }
}
