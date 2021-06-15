import { inject, injectable } from "tsyringe";
import { AppErros } from "../../../../erros/AppErros";
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
      throw new AppErros("Category already exists!", 401);
    }

    await this.categoriesRepository.create({ name });
  }
}

export { CreateCategoryUseCase }