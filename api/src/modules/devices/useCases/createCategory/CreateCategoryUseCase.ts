import { inject, injectable } from "tsyringe";
import { ICategoryRespository } from "../../repositories/interfaces/ICategoryRepository";

interface IRequest{
  name: string;
}

@injectable()
class CreateCategoryUseCase{

  //principio da inversão de dependencia - DIP + Substituição de Liskov
  constructor(
      @inject("CategoriesRepository")
      private categoriesRepository : ICategoryRespository
    ){}

  async execute({ name }: IRequest):Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    
    if(categoryAlreadyExists){
      throw new Error("Category already exists!");
    }

    await this.categoriesRepository.create({ name });
  }
}

export { CreateCategoryUseCase }