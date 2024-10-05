const express = require('express');
const serviceDeck = require('../services/serviceDeck');
const authenticateToken = require('../middleware/auth');
const serviceDeck = require('../services/serviceDeck');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { id, userID, DeckName, Description } = req.body;
        const Deck = serviceDeck.createDeck({ id, DeckName, userID, Description });
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/decks', async(req, res) =>{
    try{
        const decks = await serviceDeck.getdecks();
        res.json(decks);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;