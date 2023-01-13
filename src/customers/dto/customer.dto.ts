import { IsNotEmpty, IsOptional } from "class-validator";
// ---------- ---------- ---------- ---------- ----------

import { BaseDTO } from "../../config/base.dto";
import { UserEntity } from "../../users/entities/user.entity";
import { PurchaseEntity } from "../../purchases/entities/purchase.entity";
export class CustomerDTO extends BaseDTO {
  @IsNotEmpty()
  address!: string;

  @IsNotEmpty()
  dni!: number;

  @IsNotEmpty()
  user!: UserEntity;
}
