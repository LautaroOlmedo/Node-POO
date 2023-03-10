import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------
import { CustomersService } from "../services/customers.service";
import { HttpResponse } from "../../shared/response/htttp.response";
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService = new CustomersService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getCustomers(req: Request, res: Response) {
    try {
      const data = await this.customersService.findAll();
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async getCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.customersService.findOne(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      const data = await this.customersService.create(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }
}
