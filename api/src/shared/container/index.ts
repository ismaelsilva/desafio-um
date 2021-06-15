import { container } from "tsyringe";

import { ICategoryRespository } from "../../modules/devices/repositories/interfaces/ICategoryRepository";
import { CategoriesRepository } from "../../modules/devices/repositories/implementations/CategoriesRepository";
import { IDevicesRepository } from "../../modules/devices/repositories/interfaces/IDevicesRepository";
import { DevicesRepository } from "../../modules/devices/repositories/implementations/DevicesRepository";

//ICategoryRepository
container.registerSingleton<ICategoryRespository>(
  "CategoriesRepository",
  CategoriesRepository
);

//IDevicesRepository
container.registerSingleton<IDevicesRepository>(
  "DevicesRepository",
  DevicesRepository
);