import { ICategoryRespository } from "../interfaces/ICategoryRepository";

import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";

//Padrão singleton, basicamente define apenas uma instancia de uma classe que vai ser uma instancia global para aplicação.
//Com isso não tem a preocupação de criar outra instancia.

class CategoriesRepository implements ICategoryRespository{

  private repository:Repository<Category>;

  constructor(){
    this.repository = getRepository(Category);
  }
  async delete({ id }): Promise<void> {
    const category = await this.repository.findOne({ id });
    await this.repository.remove(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async create({ name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name
    });

    await this.repository.save(category);
  }
}

export { CategoriesRepository };