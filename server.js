const express = require('express');
const res = require('express/lib/response');
require('dotenv').config();

const server = express();

server.get('/', () => {
    res.status(200).send('Your app is up and running');
});

const port = process.env.PORT || 4040
server.listen(port, () => {
console.log(`The server has started on port ${port}`)
});