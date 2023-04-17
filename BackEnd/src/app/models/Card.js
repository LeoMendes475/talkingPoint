const Card = (sequelize, DataTypes) => {
	const Card = sequelize.define(
		"Card",
		{
			title: {
				type: DataTypes.STRING
				// allowNull: false
			},
			dateStart: DataTypes.DATE,
			dateEnd: DataTypes.DATE,
			organizer: DataTypes.STRING,
			guest: DataTypes.STRING,
			observations: DataTypes.STRING,
		}
	);
	return Card;
};

export default Card;

