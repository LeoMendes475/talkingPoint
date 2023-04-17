import Sequelize from "sequelize";
import config from "../../config/config.js";
import UserModel from "./User.js";
import CardModel from "./Card.js";

const sequelize = new Sequelize(config.database, config.username, config.password, config);

let models = {
	// Instancia a Model passando os parâmetros necessários
	User: UserModel(sequelize, Sequelize.DataTypes),
	Card: CardModel(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
	// Associa as Models no sequelize
	if ("associate" in models[modelName]) {
		models[modelName].associate(models);
	}
});

const db = {
	sequelize,
	Sequelize,
	...models,
};

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

export default db;


