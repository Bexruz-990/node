require('dotenv').config(); 
const express = require('express');
const app = express();
const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Asosiy sahifa!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
