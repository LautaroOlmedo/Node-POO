import { DeleteResult, UpdateResult } from "typeorm";

// ---------- ---------- ---------- ---------- ----------
import { BaseService } from "../../config/base.service";
import { CategoryEntity } from "../entities/category.entity";
import { CategoryDTO } from "../dto/category.dto";

export class CategoriesService extends BaseService<CategoryEntity> {
  constructor() {
    super(CategoryEntity);
  }

  async getAllCategories(): Promise<CategoryEntity[]> {
    return (await this.execRepository).find();
  }

  async createCategory(body: CategoryDTO): Promise<CategoryEntity> {
    return (await this.execRepository).save(body);
  }
}
