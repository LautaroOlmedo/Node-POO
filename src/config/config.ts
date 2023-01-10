import * as dotenv from "dotenv";
import {
  Connection,
  ConnectionOptions,
  DataSource,
  DataSourceOptions,
  createConnection,
} from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv,
    });
  }

  public getEnvironment(k: string): string | undefined {
    return process.env[k];
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }

  public get nodeEnv(): string {
    return this.getEnvironment("NODE_ENV")?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const arrEnv: Array<string> = ["env"]; //['hola', 'mundo'] => 'hola.mundo'

    if (path.length > 0) {
      const stringToArray = path.split(".");
      arrEnv.unshift(...stringToArray);
    }
    return "." + arrEnv.join(".");
  }

  public get typeORMConfig(): DataSourceOptions {
    return {
      type: "mysql",
      host: this.getEnvironment("DB_HOST"),
      port: this.getNumberEnv("DB_PORT"),
      username: this.getEnvironment("DB_USER"),
      password: this.getEnvironment("DB_PASSWORD"),
      database: this.getEnvironment("DATABASE"),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(), // userName => en db se guarda user_name
    };
  }

  async dbConnect(): Promise<DataSource> {
    try {
      return await new DataSource(this.typeORMConfig).initialize();
    } catch (e) {
      console.log(e);
      throw new Error("db is not connected");
    }
  }

  /* async dbConnect(): Promise<Connection> {
    try {
      return await createConnection(this.typeORMConfig);
    } catch (e) {
      console.log(e);
      throw new Error("db is not connected");
    }
  }*/
}
