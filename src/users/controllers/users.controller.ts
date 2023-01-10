import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
export class UsersController {
  constructor(
    private readonly usersService: UsersService = new UsersService()
  ) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.usersService.findAll();
      res.status(200).json({ data });
    } catch (e) {
      console.log(e);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      res.send(Number(req.params.id));
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      console.log(req.body);
      res.status(200).send("oka");
    } catch (e) {
      console.log(e);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      console.log(req.body);
      res.status(200).send("oka");
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      console.log(req.body);
      res.status(200).send("oka");
    } catch (e) {
      console.log(e);
    }
  }
}
