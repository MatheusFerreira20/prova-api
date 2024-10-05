const { v4: UUIDV4 } = require('uuid');
const deckRepository = require('../repositories/repositoryDeck');

class deckService{
    async getdecks(){
        return deckRepository.findAll();
    }

    async createDeck(Deck){
  
    if(Deck.deckname.length > 60)
    {
        throw new Error('deck name must be less then 60 characters');
    }

    if(Deck.description.length > 300 || Deck.description.length < 30)
        {
            throw new Error('Description must have more then 30 and less then 300');
        }

        Deck.id = UUIDV4();
        return deckRepository.createDeck(deck);
    }
}

module.exports = new ServiceDeck();