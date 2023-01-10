import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
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
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { PurchaseProductEntity } from "./purchase-product.entity";
import { payment_method, status } from "../../shared/enums";

@Entity({ name: "purchases" })
export class PurchaseEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProduct) => purchaseProduct.purchase
  )
  purchaseProduct: PurchaseProductEntity[];

  @Column({ type: "enum", enum: status, default: status.PENDING })
  status!: string;

  @Column({ type: "enum", enum: payment_method, default: payment_method.CASH })
  payment_method!: string;
}
