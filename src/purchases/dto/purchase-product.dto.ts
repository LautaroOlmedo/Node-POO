import { IsOptional, IsNotEmpty } from "class-validator";
// ---------- ---------- ---------- ---------- ----------
import { PurchaseEntity } from "../entities/purchase.entity";
import { ProductEntity } from "../../products/entities/product.entity";
import { BaseDTO } from "../../config/base.dto";
export class PurchaseProductDTO extends BaseDTO {
  @IsNotEmpty()
  quantityProduct!: number;

  @IsOptional()
  totalPrice?: number;

  @IsOptional()
  purchase?: PurchaseEntity;

  @IsOptional()
  product?: ProductEntity;
}
