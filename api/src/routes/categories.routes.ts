import { request, response, Router } from "express";
import { CreateCategoryController } from "../modules/devices/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "../modules/devices/useCases/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "../modules/devices/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const deleteCategoryController = new DeleteCategoryController();


categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.delete("/", deleteCategoryController.handle);

export { categoriesRoutes };