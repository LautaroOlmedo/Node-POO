import { BaseRouter } from "../shared/router/router";
import { CategoriesController } from "./controllers/categories.controller";

export class CategoriesRouter extends BaseRouter<CategoriesController> {
  constructor() {
    super(CategoriesController);
  }
  routes(): void {
    this.router.get("/categories", (req, res) => {
      this.controller.getCategories(req, res);
    });
    /*this.router.get("/user/:id", (req, res) => {
            this.controller.getUser(req, res);
        });*/
    this.router.post("/categories", (req, res) => {
      this.controller.createCategory(req, res);
    });
    /*this.router.patch("/user/:id", (req, res) => {
            this.controller.updateUser(req, res);
        });
        this.router.delete("/user/:id", (req, res) => {
            this.controller.deleteUser(req, res);
        });*/
  }
}
