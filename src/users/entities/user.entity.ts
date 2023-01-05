import { Entity, Column } from "typeorm";
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

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  username!: string;

  @Column({ type: "varchar", length: 25 })
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column()
  province!: string;

  @Column()
  city!: string;
}
