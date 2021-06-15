import { Category } from "../../entities/Category";

interface ICategoryRespository{
  findByName(name:string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name: string } : ICreateCategoryDTO): Promise<void>;
  delete({ id: number }): Promise<void>;
}

export {ICategoryRespository};