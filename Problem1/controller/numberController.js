const numberModel = require('../models/numberModel');

const getNumbers = async (req, res) => {
    res.json(res.locals.numbersResponse);
}

module.exports = { getNumbers };
