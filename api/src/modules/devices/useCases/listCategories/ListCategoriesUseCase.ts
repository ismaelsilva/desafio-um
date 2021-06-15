import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRespository } from "../../repositories/interfaces/ICategoryRepository";

@injectable()
class ListCategoriesUseCase{
  
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository : ICategoryRespository
    ){}

  async execute():Promise<Category[]> {
    const all = this.categoriesRepository.list();
    return all;
  }
}

export { ListCategoriesUseCase } ;