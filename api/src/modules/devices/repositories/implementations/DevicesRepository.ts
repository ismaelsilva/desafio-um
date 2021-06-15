import { Device } from "../../entities/Device";
import { IDevicesRepository } from "../interfaces/IDevicesRepository";
import { getRepository, Repository } from "typeorm";

class DevicesRepository implements IDevicesRepository{

  private repositoryDevices:Repository<Device>;
  constructor(){
    this.repositoryDevices = getRepository(Device);
  }
  async delete({ id }): Promise<void> {
    const device = await this.repositoryDevices.findOne({ id });
    await this.repositoryDevices.remove(device);
  }

  async findByPartNumber(partNumber: string): Promise<Device> {
    const device = await this.repositoryDevices.findOne({ partNumber });
    return device;
  }
  async list(): Promise<Device[]> {
    const devices = await this.repositoryDevices.find();
    return devices;
  }
  async create({ idCategory, color, partNumber }: ICreateDeviceDTO): Promise<void> {
    const device = this.repositoryDevices.create({
      color,
      partNumber,
      idCategory
    });

    await this.repositoryDevices.save(device);
  }
  
}

export { DevicesRepository };