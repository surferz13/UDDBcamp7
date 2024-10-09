const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/auth.controller");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication API
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Crear a un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupRequest'
 *     responses:
 *       201:
 *         description: El usuario fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: No fue posible crear el usuario
 */

router.post("/signup", signup);

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SigninRequest'
 *     responses:
 *       200:
 *         description: Ingreso exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Usuario o password incorrecto
 */
router.post("/signin", signin);

/**
 * @swagger
 * components:
 *   schemas:
 *     SignupRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: El username del usuario
 *         email:
 *           type: string
 *           description: El email del usuario
 *         password:
 *           type: string
 *           description: El password del usuario
 *       required:
 *         - username
 *         - email
 *         - password
 *       example:
 *         username: "john_doe"
 *         email: "john.doe@example.com"
 *         password: "secret"
 *
 *     SigninRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: El username del usuario
 *         password:
 *           type: string
 *           description: El password del usuario
 *       required:
 *         - username
 *         - password
 *       example:
 *         username: "john_doe"
 *         password: "secret"
 *
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: El id unico del usuario
 *         username:
 *           type: string
 *           description: El username del usuario
 *         email:
 *           type: string
 *           description: El email del usuario
 *       required:
 *         - username
 *         - email
 *       example:
 *         id: "12345"
 *         username: "john_doe"
 *         email: "john.doe@example.com"
 */

module.exports = router;