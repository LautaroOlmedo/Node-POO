import { Request, Response } from "express";
export class UsersController {
  async getUsers(req: Request, res: Response) {
    try {
      await res.send("hi");
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
}
