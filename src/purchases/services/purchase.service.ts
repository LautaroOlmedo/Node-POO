// ---------- ---------- ---------- ---------- ----------

import { BaseService } from "../../config/base.service";
import { PurchaseEntity } from "../entities/purchase.entity";
import { ProductsService } from "../../products/services/products.service";
import { PurchaseDTO } from "../dto/purchase.dto";

export class PurchaseService extends BaseService<PurchaseEntity> {
  constructor(
    private readonly productsService: ProductsService = new ProductsService()
  ) {
    super(PurchaseEntity);
  }

  async findAll(): Promise<PurchaseEntity[]> {
    return (await this.execRepository).find();
  }

  async findOne(id: string): Promise<PurchaseEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async create(body: PurchaseDTO): Promise<PurchaseEntity> {
    return (await this.execRepository).save(body);
  }
}
