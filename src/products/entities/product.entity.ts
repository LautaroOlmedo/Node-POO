import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
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
import { CategoryEntity } from "../../categories/entities/category.entity";
import { PurchaseProductEntity } from "../../purchases/entities/purchase-product.entity";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {
  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct: PurchaseProductEntity[];
  @Column({ type: "varchar", length: 25 })
  product_name!: string;

  @Column({ type: "varchar", length: 150 })
  description!: string;

  @Column({ type: "integer" })
  @Min(9)
  @Max(2500)
  price!: number;
}
