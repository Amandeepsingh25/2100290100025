const numberModel = require('../models/numberModel');

const fetchNumbersMiddleware = async (req, res, next) => {
    const type = req.params.type;
    const validTypes = ['e', 'p', 'f', 'r'];

    if (!validTypes.includes(type)) {
        return res.status(400).json({ error: 'Invalid number type' });
    }

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI2MTUxLCJpYXQiOjE3MTcyMjU4NTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhhZDZlN2VlLTU1MmEtNDQyMC1iNWNmLTFmMTJkODM1ZGVlZSIsInN1YiI6ImFtYW5kZWVwLjIxMjVjc2UxMTc2QGtpZXQuZWR1In0sImNvbXBhbnlOYW1lIjoidGVjaHNhdmV5IiwiY2xpZW50SUQiOiI4YWQ2ZTdlZS01NTJhLTQ0MjAtYjVjZi0xZjEyZDgzNWRlZWUiLCJjbGllbnRTZWNyZXQiOiJ1dWNsSVFuelhBQ3JUUEtOIiwib3duZXJOYW1lIjoiQW1hbmRlZXAgU2luZ2giLCJvd25lckVtYWlsIjoiYW1hbmRlZXAuMjEyNWNzZTExNzZAa2lldC5lZHUiLCJyb2xsTm8iOiIyMTAwMjkwMTAwMDI1In0.f6_MWxXmRzfyAInu-0TD_eUvP6qyUyTeDv2E1UPOk8Y"

    const response = await numberModel.fetchNumbersAndCalculateAverage(type, accessToken);
    res.locals.numbersResponse = response;
    next();
}

module.exports = { fetchNumbersMiddleware };
