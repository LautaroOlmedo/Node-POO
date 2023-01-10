import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
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
import { PurchaseEntity } from "./purchase.entity";

@Entity({ name: "purchases_products" })
export class PurchaseProductEntity extends BaseEntity {
  @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
  @JoinColumn({ name: "product_id" })
  product!: ProductEntity;

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
  @JoinColumn({ name: "purchase_id" })
  purchase!: ProductEntity;

  @Column({ type: "integer" })
  quantity_products!: number;

  @Column({ type: "integer" })
  total_price!: number;
}
