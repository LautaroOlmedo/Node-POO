import { IsNotEmpty } from "class-validator";
// ---------- ---------- ---------- ---------- ----------
export class CategoryDTO {
  @IsNotEmpty()
  category_name!: string;
}
