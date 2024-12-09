const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Holding = sequelize.define('Holding', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    stockId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    avgPrice: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Holding;
