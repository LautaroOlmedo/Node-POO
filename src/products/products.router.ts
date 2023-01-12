// ---------- ---------- ---------- ---------- ----------
import { BaseRouter } from "../shared/router/router";
import { ProductsController } from "./controllers/products.controller";
import { ProductMiddleware } from "./middlewares/product.middleware";

export class ProductsRouter extends BaseRouter<
  ProductsController,
  ProductMiddleware
> {
  constructor() {
    super(ProductsController, ProductMiddleware);
  }
  routes(): void {
    this.router.get("/products", (req, res) => {
      this.controller.getProducts(req, res);
    });
    this.router.get("/product/:id", (req, res) => {
      this.controller.getProduct(req, res);
    });
    this.router.post("/products", (req, res) => {
      this.controller.createProduct(req, res);
    });
  }
}
