import { Router } from "express";
export class BaseRouter<T> {
  constructor(TController: { new (): T }) {
    this.router = Router();
    this.controller = new TController();
    //this.middleware = new UMiddleware();
    this.routes();
  }

  routes() {}

  // ---------- ---------- ---------- VARIABLES ---------- ---------- ----------
  public router: Router;
  public controller: T;
  //public middleware: U;
}
