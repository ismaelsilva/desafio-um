import { inject, injectable } from "tsyringe";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";

interface IRequest{
  id: number;
}

@injectable()
class DeleteDeviceUseCase{
  constructor(
    @inject("DevicesRepository")
    private devicesRepository : IDevicesRepository
    ){}

  async execute({ id }: IRequest):Promise<void> {
    await this.devicesRepository.delete({id});
  }
}

export { DeleteDeviceUseCase };