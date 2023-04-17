const { DataTypes } = require('sequelize');

module.exports = function defineObservationModel(sequelize) {
  const Observation = sequelize.define("Observation", {
    anotacoes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Observation;
};