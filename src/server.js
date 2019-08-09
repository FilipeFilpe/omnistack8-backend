const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// conecta com DB
mongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-mpni2.mongodb.net/omnistack8?retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

//cria o servidor
const server = express();

server.use(cors());
//diz q a req usa json
server.use(express.json());
server.use(routes);

server.listen(3333);