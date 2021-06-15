import { Request, Response  } from 'express';
import { DeleteDeviceUseCase } from './DeleteDeviceUseCase';
import { container } from "tsyringe";

class DeleteDeviceController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const deleteUseCase = container.resolve(DeleteDeviceUseCase);
    const { id } = request.body;
    await deleteUseCase.execute({ id } );
    return response.status(201).send();
    
  };
}

export { DeleteDeviceController };