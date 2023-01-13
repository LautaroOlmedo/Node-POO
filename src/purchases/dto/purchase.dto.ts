import { IsNotEmpty, IsOptional } from "class-validator";
// ---------- ---------- ---------- ---------- ----------
import { BaseDTO } from "../../config/base.dto";
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { paymentMethod, transactionStatus } from "../../shared/enums";

export class PurchaseDTO extends BaseDTO {
  @IsNotEmpty()
  status!: transactionStatus;

  @IsNotEmpty()
  paymentMethod!: paymentMethod;

  @IsNotEmpty()
  customer!: CustomerEntity;
}
