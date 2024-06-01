const express = require('express');
const numberRouter = require('./routes/numberRouter');

const app = express();
const PORT = 9876;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/numbers', numberRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
