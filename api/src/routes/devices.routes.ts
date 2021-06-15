import { request, response, Router } from "express";
import { CreateDeviceController } from "../modules/devices/useCases/createDevice/CreateDeviceController";
import { DeleteDeviceController } from "../modules/devices/useCases/deleteDevice/DeleteDeviceController";
import { ListDevicesController } from "../modules/devices/useCases/listDevice/ListDevicesController";

const devicesRoutes = Router();
const createDeviceController = new CreateDeviceController();
const listDevicesController = new ListDevicesController();
const deleteDeviceController = new DeleteDeviceController();

devicesRoutes.post("/", createDeviceController.handle);
devicesRoutes.get("/", listDevicesController.handle);
devicesRoutes.delete("/", deleteDeviceController.handle);

export {devicesRoutes};