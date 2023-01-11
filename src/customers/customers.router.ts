import { BaseRouter } from "../shared/router/router";
import { CustomersController } from "./controllers/customers.controller";

export class CustomersRouter extends BaseRouter<CustomersController> {
  constructor() {
    super(CustomersController);
  }
  routes(): void {
    this.router.get("/customers", (req, res) => {
      this.controller.getCustomers(req, res);
    });
    this.router.get("/customer/:id", (req, res) => {
      this.controller.getCustomer(req, res);
    });
    this.router.post("/customers", (req, res) => {
      this.controller.createCustomer(req, res);
    });
  }
}
