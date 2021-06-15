import { Request, Response } from 'express';
import { ListDevicesUseCase } from './ListDevicesUseCase';
import { container } from "tsyringe";

class ListDevicesController{
  async handle(request: Request, response: Response): Promise<Response>{
    const listUseCase = container.resolve(ListDevicesUseCase);
    const all = await listUseCase.execute();
    return response.json(all);
  }  
}

export { ListDevicesController };