const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey, its your simple API using Express.js!');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Test data API',
        items: [1, 2, 3, 4, 5]
    };
    res.json(data);
});

app.post('/api/post', (req, res) => {
    const { name, age } = req.body;
    res.json({
        message: `Thanks, ${name}! Your age: ${age}.`
    });
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
