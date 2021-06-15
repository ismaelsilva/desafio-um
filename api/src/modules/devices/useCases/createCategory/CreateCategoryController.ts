import { Request, Response  } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { container } from "tsyringe";

class CreateCategoryController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const { name } = request.body;
    await createCategoryUseCase.execute({ name } );
    return response.status(201).send();
    
  };
}

export { CreateCategoryController }