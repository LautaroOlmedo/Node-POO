import { BaseService } from "../../config/base.service";
// ---------- ---------- ---------- ---------- ----------
import { CustomerEntity } from "../entities/customer.entity";
import { HttpResponse } from "../../shared/response/htttp.response";
import { CustomerDTO } from "../dto/customer.dto";

export class CustomersService extends BaseService<CustomerEntity> {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {
    super(CustomerEntity);
  }

  async findAll(): Promise<CustomerEntity[]> {
    const customers = (await this.execRepository).find();
    return customers;
  }

  async findOne(id: string): Promise<CustomerEntity | null> {
    /*const customer = (await this.execRepository)
      .createQueryBuilder("customer")
      .leftJoinAndSelect("customer.user", "user")
      .where({ id })
      .getOne();*/
    const customer = (await this.execRepository).findOneBy({ id });
    if (!customer) throw new Error("User not found");
    return customer;
  }

  async create(body: CustomerDTO): Promise<CustomerEntity> {
    return (await this.execRepository).save(body);
  }
}
