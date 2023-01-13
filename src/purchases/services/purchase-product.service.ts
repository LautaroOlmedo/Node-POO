// ---------- ---------- ---------- ---------- ----------
import { BaseService } from "../../config/base.service";
import { PurchaseProductEntity } from "../entities/purchase-product.entity";
import { ProductsService } from "../../products/services/products.service";
import { PurchaseProductDTO } from "../dto/purchase-product.dto";

export class PurchaseProductService extends BaseService<PurchaseProductEntity> {
  constructor(
    private readonly productsService: ProductsService = new ProductsService()
  ) {
    super(PurchaseProductEntity);
  }

  async create(body: PurchaseProductDTO): Promise<PurchaseProductEntity> {
    const newPP = (await this.execRepository).create(body);
    const prod = await this.productsService.findOne(newPP.product.id);
    newPP.total_price = prod!.price * newPP.quantity_products;
    return (await this.execRepository).save(newPP);
  }
}
