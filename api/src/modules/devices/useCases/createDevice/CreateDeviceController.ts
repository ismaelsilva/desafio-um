import { Request, Response  } from 'express';
import { CreateDeviceUseCase } from './CreateDeviceUseCase';
import { container } from "tsyringe";

class CreateDeviceController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const createDeviceUseCase = container.resolve(CreateDeviceUseCase);
    const { idCategory, color, partNumber } = request.body;
    await createDeviceUseCase.execute({ idCategory, color, partNumber } );
    return response.status(201).send();
    
  };
}

export { CreateDeviceController };