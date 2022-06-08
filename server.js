const express = require('express');
const name = "debbie";
console.log(name);

// i dont know where this line came from even though it makes sense
// const res = require('express/lib/response');
require('dotenv').config();

const server = express();

server.get('/', () => {
    res.status(200).send('Your app is up and running smoothly');
});

const port = process.env.PORT || 3030
server.listen(port, () => {
console.log(`The server has started on port ${port}`)
});