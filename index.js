require('dotenv').config(); 
const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
