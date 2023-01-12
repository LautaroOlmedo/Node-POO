import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";

// ---------- ---------- ---------- ---------- ----------

import { HttpResponse } from "../../shared/response/htttp.response";

export class ProductMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  userValidator(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
