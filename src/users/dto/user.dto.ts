import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
} from "class-validator";

export class UserDTO {
  @IsNotEmpty()
  firstname!: string;

  @IsNotEmpty()
  lastname!: string;

  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  age!: number;

  @IsNotEmpty()
  province!: string;

  @IsNotEmpty()
  city!: string;
}
