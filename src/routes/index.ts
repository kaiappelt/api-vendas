import productsRoutes from "../modules/produtos/routes/products.routes";
import estoqueRoutes from "../modules/estoque/routes/estoque.routes";
import categoriasRoutes from "../modules/categorias/routes/categorias.routes";
import { Router } from "express";

const routes = Router();

routes.use("/produtos", productsRoutes);
routes.use("/estoque", estoqueRoutes);
routes.use("/categorias", categoriasRoutes);

export default routes;