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
import { paymentMethod, transactionStatus } from "../../shared/enums";

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

  @Column({
    type: "enum",
    enum: transactionStatus,
    default: transactionStatus.PENDING,
  })
  status!: transactionStatus;

  @Column({ type: "enum", enum: paymentMethod, default: paymentMethod.CASH })
  payment_method!: paymentMethod;
}
