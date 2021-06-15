import { inject, injectable } from "tsyringe";
import { ICategoryRespository } from "../../repositories/interfaces/ICategoryRepository";

interface IRequest{
  id: number;
}

@injectable()
class DeleteCategoryUseCase{
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository : ICategoryRespository
  ){}

  async execute({ id }: IRequest):Promise<void> {
    await this.categoriesRepository.delete({id});
  }
}

export { DeleteCategoryUseCase };