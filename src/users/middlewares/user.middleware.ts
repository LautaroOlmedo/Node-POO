import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";

// ---------- ---------- ---------- ---------- ----------
import { UserDTO } from "../dto/user.dto";
import { HttpResponse } from "../../shared/response/htttp.response";

export class UserMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  userValidator(req: Request, res: Response, next: NextFunction) {
    const {
      firstname,
      lastname,
      username,
      age,
      email,
      password,
      city,
      province,
      role,
    } = req.body;

    const valid = new UserDTO();
    valid.firstname = firstname;
    valid.lastname = lastname;
    valid.username = username;
    valid.age = age;
    valid.email = email;
    valid.password = password;
    valid.city = city;
    valid.province = province;
    valid.role = role;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
