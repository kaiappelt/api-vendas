import { Router } from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import ProductsController from "../controllers/ProductsController";

let productsRoutes = Router();
let productsController = new ProductsController();

productsRoutes.get("/", productsController.index);

productsRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            categoria_uid: Joi.string().uuid().required(),
        },
    }),
    productsController.create,
);

productsRoutes.put(
    '/:uid',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            categoria_uid: Joi.string().uuid().required(),
        },
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    productsController.update,
);


productsRoutes.delete(
    '/:uid',
    celebrate({
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    productsController.delete,
);

export default productsRoutes;