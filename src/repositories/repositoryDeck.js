const Deck = require('../models/deck');
const Content = require('../models/deck')

class DeckRepository{
    async createDeck(deck){
        return await Deck.create(deck);
    }

    async findByDeckID(userID){
        return await Deck.findOne({ where: { userID }})
    }

    async findAll(){
        return await Content.findAll();
    }
}

module.exports = new DeckRepository();