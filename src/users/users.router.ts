import { BaseRouter } from "../shared/router/router";
import { UsersController } from "./controllers/users.controller";

export class UsersRouter extends BaseRouter<UsersController> {
  constructor() {
    super(UsersController);
  }
  routes() {
    this.router.get("/users", (req, res) => {
      this.controller.getUsers(req, res);
    });
  }
}
