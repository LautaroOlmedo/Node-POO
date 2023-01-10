import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Request, Response } from "express";
import "reflect-metadata";
// ---------- ---------- ---------- ---------- ----------
import { UsersRouter } from "./users/users.router";
import { ConfigServer } from "./config/config";

class ServerBootstrap extends ConfigServer {
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.dbConnect();
    this.app.use(cors());
    this.app.use("/api", this.routers());

    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        status: `accepted`,
        owner: `Lautaro Olmedo`,
        message: `REST-API NodeJS+POO`,
      });
    });

    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UsersRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`app listening on port => ${this.port}`)
    );
  }

  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");
}

new ServerBootstrap();
