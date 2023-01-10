import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
} from "class-validator";

// ---------- ---------- ---------- ---------- ----------
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../users/entities/user.entity";
import { PurchaseEntity } from "../../purchases/entities/purchase.entity";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {
  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchases) => purchases.customer)
  purchases!: PurchaseEntity[];

  @Column()
  address!: string;

  @Column({ type: "varchar", length: 25 })
  dni!: string;
}
