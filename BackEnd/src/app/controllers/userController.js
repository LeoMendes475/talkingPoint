import express from "express";
import { body, validationResult } from "express-validator";

// Importa as Models já instanciadas a partir do models/index.js
import db from "../models/index.js";
const { User } = db;

const router = express.Router();

router.post("/", async (request, response) => {
	const { firstName, lastName } = request.body;
	try {
		const jane = await User.create({ firstName, lastName });
		console.log("User's auto-generated ID:", jane.id);

		if (response.status(201)) {
			response.status(201).json({ message: "Usuário cadastrado com sucesso" });
		}
	} catch (err) {
		response.status(500).json({ message: `Encontramos um erro: ${err}` });
	}
});

router.get("/", async (request, response) => {
	try {
		const users = await User.findAll();
		if (users) {
			response.status(200).json({ message: "Ok!", users });
		} else {
			response.status(200).json({ message: "Nenhum usuario encontrado" });
		}
	} catch (err) {
		response.status(500).json({ message: `Encontramos um erro: ${err}` });
	}
});

// router.put('/', [], async (request, response) => {
//   try {
//     response.status(201).json({ message: 'Usuário atualizado com sucesso' });
//   } catch (err) {
//     response.status(500).json({ message: `Encontramos um erro: ${err}` })
//   }
// });

// router.delete('/:idUser', async (request, response) => {

//   try {

//     response.status(201).json({ messege: 'Usuário deletado com sucesso' });

//   } catch (err) {

//     response.status(500).json({ messege: `Encontramos um erro: ${err}` })
//   }
// });

export default router;
