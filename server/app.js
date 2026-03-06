const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

let clients = [];

app.get('/', (req, res) => {
    res.send('CMS API is running');
})

app.get('/clients', (req, res) => {
    res.json(clients);
})

app.post('/clients', (req, res) => {
    const { name, email, phone, address } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and email are required'
        })
    }

    const newClient = {
        id: clients.length + 1,
        name,
        email,
        phone,
        address
    }

    clients.push(newClient);

    res.status(201).json(newClient);
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});