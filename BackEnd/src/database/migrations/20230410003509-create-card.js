"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Cards", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				// allowNull: false,
			},
			dateStart: { type: Sequelize.DATE },
			dateEnd: { type: Sequelize.DATE },
			organizer: { type: Sequelize.STRING },
			guest: { type: Sequelize.STRING },
			observations: { type: Sequelize.STRING },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Cards");
	},
};
