import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------
import { UsersService } from "../services/users.service";
import { HttpResponse } from "../../shared/response/htttp.response";
import { DeleteResult, UpdateResult } from "typeorm";
export class UsersController {
  constructor(
    private readonly usersService: UsersService = new UsersService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.usersService.findAll();
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const data = await this.usersService.findOne(req.params.id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      console.log(req.body);
      const data = await this.usersService.create(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      console.log(req.body);
      const data: UpdateResult = await this.usersService.update(
        req.params.id,
        req.body
      );
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Updated error");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = this.usersService.delete(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.log(e);
      return this.httpResponse.Error(res, e);
    }
  }
}
