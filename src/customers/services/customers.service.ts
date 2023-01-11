import { BaseService } from "../../config/base.service";
// ---------- ---------- ---------- ---------- ----------
import { CustomerEntity } from "../entities/customer.entity";
import { HttpResponse } from "../../shared/response/htttp.response";
import { EntityPropertyNotFoundError } from "typeorm";

export class CustomersService extends BaseService<CustomerEntity> {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {
    super(CustomerEntity);
  }

  async getAllCustomers(): Promise<CustomerEntity[]> {
    const customers = (await this.execRepository).find();
    return customers;
  }

  async getCustomer(id: string): Promise<CustomerEntity | null> {
    /*const customer = (await this.execRepository)
      .createQueryBuilder("customer")
      .leftJoinAndSelect("customer.user", "user")
      .where({ id })
      .getOne();*/
    const customer = (await this.execRepository).findOneBy({ id });
    if (!customer) throw new Error("User not found");
    return customer;
  }

  async createCustomer(body: any): Promise<CustomerEntity> {
    const newCustomer = (await this.execRepository).save(body);
    return newCustomer;
  }
}
