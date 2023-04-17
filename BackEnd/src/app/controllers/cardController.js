import express from "express";
import { body, validationResult } from "express-validator";
import db from "../models/index.js";

const { Card } = db;

const router = express.Router();

router.post("/", async (request, response) => {
	const { title, dateStart, dateEnd, organizer, guest, observations } = request.body;
	try {
		const jane = await Card.create({ title, dateStart, dateEnd, organizer, guest, observations });
		console.log("Card's auto-generated ID:", jane.id);

		if (response.status(201)) {
			response.status(201).json({ message: "Card cadastrado com sucesso" });
		}
	} catch (err) {
		response.status(500).json({ message: `Encontramos um erro: ${err}` });
	}
});

router.get("/", async (request, response) => {
	try {
		const cards = await Card.findAll();
		if (cards) {
			response.status(200).json({ message: "Ok!", cards });
		} else {
			response.status(200).json({ message: "Nenhum usuario encontrado" });
		}
	} catch (err) {
		response.status(500).json({ message: `Encontramos um erro: ${err}` });
	}
});

router.delete("/:id", async (request, response) => {
	const { id } = request.params;
	try {
	  const card = await Card.findByPk(id);
	  if (!card) {
		return response.status(404).json({ message: "Card não encontrado" });
	  }
	  await card.destroy();
	  response.status(200).json({ message: "Card deletado com sucesso" });
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
