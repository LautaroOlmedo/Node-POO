import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
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
import { Exclude } from "class-transformer";

// ---------- ---------- ---------- ---------- ----------
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;

  @Column()
  username!: string;

  @Column({ type: "varchar", length: 25 })
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column()
  province!: string;

  @Column()
  city!: string;
}
