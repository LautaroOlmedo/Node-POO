import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------
import { ProductsService } from "../services/products.service";
import { HttpResponse } from "../../shared/response/htttp.response";

export class ProductsController {
  constructor(
    private readonly productsService: ProductsService = new ProductsService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getProducts(req: Request, res: Response) {
    try {
      const data = await this.productsService.findALl();
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.productsService.findOne(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data = await this.productsService.create(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }
}
