import { Device } from "../../entities/Device";

interface IDevicesRepository{
  findByPartNumber(partNumber:string): Promise<Device>;
  list(): Promise<Device[]>;
  create({ idCategory, color, partNumber  } : ICreateDeviceDTO): Promise<void>;
  delete({ id: number }): Promise<void>;
}

export { IDevicesRepository };