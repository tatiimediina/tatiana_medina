import { body } from "express-validator";

export const signUpValidation = [
  body("username")
    .isString()
    .withMessage("El campo username debe ser un string")
    .notEmpty(),
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("El email no puede estar vacio"),
  body("password").isLength({ min: 6 }).notEmpty(),
  body("id")
    .isString()
    .notEmpty()
    .withMessage("El id debe ser un string y no puede estar vació"),
];

export const signInValidation = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Email es un campo obligatorio"),
  body("password")
    .isLength({ min: 6 })
    .notEmpty()
    .withMessage("Password es un campo obligatorio"),
];
