import { inject, injectable } from "tsyringe";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";

interface IRequest{
  idCategory: number;
  color: string;
  partNumber: string;
}

@injectable()
class CreateDeviceUseCase{
  constructor(
    @inject("DevicesRepository")
    private devicesRepository : IDevicesRepository
  ){}

  async execute({ idCategory, color, partNumber }: IRequest):Promise<void> {
    const deviceAlreadyExists = await this.devicesRepository.findByPartNumber(partNumber);
    
    if(deviceAlreadyExists){
      throw new Error("Device already exists!");
    }
    await this.devicesRepository.create({ idCategory, color, partNumber });
  }
}

export { CreateDeviceUseCase };