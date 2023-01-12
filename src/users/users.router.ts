import { BaseRouter } from "../shared/router/router";
import { UsersController } from "./controllers/users.controller";
import { UserMiddleware } from "./middlewares/user.middleware";

export class UsersRouter extends BaseRouter<UsersController, UserMiddleware> {
  constructor() {
    super(UsersController, UserMiddleware);
  }
  routes(): void {
    this.router.get("/users", (req, res) => {
      this.controller.getUsers(req, res);
    });
    this.router.get("/user/:id", (req, res) => {
      this.controller.getUser(req, res);
    });
    this.router.post(
      "/users",
      (req, res, next) => [this.middleware.userValidator(req, res, next)],
      (req, res) => {
        this.controller.createUser(req, res);
      }
    );
    this.router.patch("/user/:id", (req, res) => {
      this.controller.updateUser(req, res);
    });
    this.router.delete("/user/:id", (req, res) => {
      this.controller.deleteUser(req, res);
    });
  }
}
