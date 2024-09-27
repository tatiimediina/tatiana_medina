// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUI

import { body } from "express-validator";

export const createOrdenValidations = [
  body("coffee")
    .isString()
    .withMessage("El campo coffe es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El campo coffe debe tener al menos 3 caracteres")
    .notEmpty()
    .withMessage("El campo coffe es obligatorio"),
  body("userId")
    .isString()
    .withMessage("El campo debe userId debe ser un string")
    .notEmpty()
    .withMessage("El campo userId es obligatorio"),
  body("id")
    .isString()
    .withMessage("El campo debe ser un string")
    .notEmpty()
    .withMessage("El campo id es obligatorio"),
];
