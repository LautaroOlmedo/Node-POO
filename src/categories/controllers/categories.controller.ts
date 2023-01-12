import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------
import { CategoriesService } from "../services/categories.service";
import { HttpResponse } from "../../shared/response/htttp.response";

export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService = new CategoriesService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getCategories(req: Request, res: Response) {
    try {
      const data = await this.categoriesService.findAll();
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const data = await this.categoriesService.create(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }
}
