const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Stock = sequelize.define('Stock', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    symbol: { type: DataTypes.STRING, allowNull: false },
    currentPrice: { type: DataTypes.FLOAT, allowNull: false },
    dailyChange: { type: DataTypes.FLOAT },
});

module.exports = Stock;
