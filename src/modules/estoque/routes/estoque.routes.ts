import { Router } from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import EstoqueController from "../controllers/EstoqueController";

let estoqueRoutes = Router();
let estoqueController = new EstoqueController();

estoqueRoutes.get("/", estoqueController.index);

estoqueRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            produto_uid: Joi.string().uuid().required(),
            quantidade: Joi.number().required(),
        },
    }),
    estoqueController.create,
);

estoqueRoutes.put(
    '/:uid',
    celebrate({
        [Segments.BODY]: {
            produto_uid: Joi.string().uuid().required(),
            quantidade: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    estoqueController.update,
);


estoqueRoutes.delete(
    '/:uid',
    celebrate({
        [Segments.PARAMS]: {
            uid: Joi.string().uuid().required(),
        },

    }),
    estoqueController.delete,
);

export default estoqueRoutes;