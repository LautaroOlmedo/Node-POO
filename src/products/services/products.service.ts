// ---------- ---------- ---------- ---------- ----------
import { BaseService } from "../../config/base.service";
import { ProductEntity } from "../entities/product.entity";
import { ProductDTO } from "../dto/product.dto";

export class ProductsService extends BaseService<ProductEntity> {
  constructor() {
    super(ProductEntity);
  }

  async findALl(): Promise<ProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findOne(id: string): Promise<ProductEntity | null> {
    /*const product = (await this.execRepository)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.category", "category")
      .where({ id })
      .getOne();
    return product;*/
    return (await this.execRepository).findOneBy({ id });
  }

  async create(body: ProductDTO): Promise<ProductEntity> {
    return (await this.execRepository).save(body);
  }
}
