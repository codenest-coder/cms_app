const express = require('express')
const router = express.Router();

let clients = [];

router.get('/', (req, res) => {
    res.json(clients);
})

router.post('/', (req, res) => {
    const client = req.body;
    clients.push(client);
    res.json(client);
});

module.exports = router;