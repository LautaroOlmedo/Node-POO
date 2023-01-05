import { Request, Response } from "express";
export class UsersController {
  async getUsers(req: Request, res: Response) {
    await res.send("hi");
  }
}
