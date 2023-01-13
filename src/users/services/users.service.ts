import { DeleteResult, UpdateResult } from "typeorm";
// ---------- ---------- ---------- ---------- ----------
import { BaseService } from "../../config/base.service";
import { UserEntity } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";

export class UsersService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  async findAll(): Promise<UserEntity[]> {
    return (await this.execRepository).find();
  }

  async findOne(id: string): Promise<UserEntity | null> {
    const user = (await this.execRepository)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.customer", "customer")
      .where({ id })
      .getOne();
    return user;
  }

  async create(body: UserDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body);
  }

  async update(id: string, body: any): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
}
