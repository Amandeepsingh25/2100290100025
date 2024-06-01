const express = require('express');
const numberMiddleware = require('../middlewares/numberMiddleware');
const numberController = require('../controller/numberController');

const router = express.Router();

// Define route for fetching numbers
router.get('/:type', numberMiddleware.fetchNumbersMiddleware, 
                    numberController.getNumbers);

module.exports = router;
