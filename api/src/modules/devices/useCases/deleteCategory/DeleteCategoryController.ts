import { Request, Response  } from 'express';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';
import { container } from "tsyringe";

class DeleteCategoryController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const deleteUseCase = container.resolve(DeleteCategoryUseCase);
    const { id } = request.body;
    await deleteUseCase.execute({ id } );
    return response.status(201).send();
    
  };
}

export { DeleteCategoryController };