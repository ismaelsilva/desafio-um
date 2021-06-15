import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { devicesRoutes } from "./devices.routes";

const router = Router();

router.use("/categories",categoriesRoutes);
router.use("/devices",devicesRoutes);

export {router};