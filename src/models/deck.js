const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Decks', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    userID: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    DeckName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Deck;