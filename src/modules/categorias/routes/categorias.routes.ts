import { Router } from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import CategoriasController from "../controllers/CategoriasController";

let categoriasRoutes = Router();
let categoriasController = new CategoriasController();

categoriasRoutes.get("/", categoriasController.index);

categoriasRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            tag: Joi.string().required(),
        },
    }),
    categoriasController.create,
);

categoriasRoutes.put(
    '/:uid',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            tag: Joi.string().required(),
        },
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    categoriasController.update,
);


categoriasRoutes.delete(
    '/:uid',
    celebrate({
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    categoriasController.delete,
);

export default categoriasRoutes;