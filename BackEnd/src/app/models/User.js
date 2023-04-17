const User = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			username: {
				type: DataTypes.STRING(128),
				allowNull: false,
				validate: { min: 3, max: 128 },
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			userpassword: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: { min: 6 },
			},
		},
		{
			// Other model options go here
		}
	);
	return User;
};

export default User;
