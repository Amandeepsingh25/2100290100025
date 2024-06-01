const axios = require('axios');

const WINDOW_SIZE = 10;
let windowNumbers = [];

const fetchNumbersWithToken = async (type, token) => {
    try {
        const response = await axios.get(`http://20.244.56.144/test/${type}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching ${type} numbers:`, error.message);
        return [];
    }
}

const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}



const fetchNumbersAndCalculateAverage = async (type, accessToken) => {
    let numbers;

    switch (type) {
        case 'p':
            numbers = await fetchNumbersWithToken('primes', accessToken);
            break;
        case 'f':
            numbers = await fetchNumbersWithToken('fibo', accessToken);
            break;
        case 'e':
            numbers = await fetchNumbersWithToken('even', accessToken);
            break;
        case 'r':
            numbers = await fetchNumbersWithToken('rand', accessToken);
            break;
        default:
            numbers = [];
    }

    windowNumbers = windowNumbers.concat(numbers).slice(-WINDOW_SIZE);
    const avg = calculateAverage(windowNumbers);

    return {
        numbers: numbers,
        windowPrevState: windowNumbers.slice(0, -numbers.length),
        windowCurrState: windowNumbers,
        avg: avg.toFixed(2)
    };
}

module.exports = { fetchNumbersAndCalculateAverage };
