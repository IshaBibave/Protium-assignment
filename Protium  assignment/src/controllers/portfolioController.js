const express = require('express');
const { getPortfolio, addStock, removeStock } = require('../controllers/portfolioController');

const router = express.Router();

router.get('/value', getPortfolio);
router.post('/add', addStock);
router.delete('/remove', removeStock);

module.exports = router;
