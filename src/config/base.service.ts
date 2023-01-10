import { Repository, EntityTarget, DataSource, ObjectLiteral } from "typeorm";

// ---------- ---------- ---------- ---------- ----------
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BaseEntity> extends ConfigServer {
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.execRepository = this.initRepository(getEntity);
  }
  async initRepository<T extends ObjectLiteral>(
    e: EntityTarget<T>
  ): Promise<Repository<T>> {
    const getConn = await this.dbConnect();
    return getConn.getRepository(e);
  }

  // ---------- ---------- ---------- VARIABLES ---------- ---------- ----------
  public execRepository: Promise<Repository<T>>;
}
