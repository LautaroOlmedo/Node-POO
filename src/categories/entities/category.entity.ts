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
import { ProductEntity } from "../../products/entities/product.entity";

@Entity({ name: "categories" })
export class CategoryEntity extends BaseEntity {
  @OneToMany(() => ProductEntity, (products) => products.category)
  products: ProductEntity[];
  @Column({ type: "varchar", length: 25 })
  category_name!: string;
}
