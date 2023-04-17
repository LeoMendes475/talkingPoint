import express from "express";
import user from "./app/controllers/userController.js";
import card from "./app/controllers/cardController.js";
import login from "./app/controllers/loginController.js";

// atribui a router as funçoes do express.Router()
const router = express.Router();

// faz uso das rotas definidas apartir do conteúdo da controller selecionada
router.use("/user", user);
router.use("/card", card);
router.use("/login", login);

//exporta a router
export default router;
