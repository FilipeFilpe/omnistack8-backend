const express = require('express');

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
// cria obj para rotas
const routes = express.Router();

//rotas GET, POST, PUT e DELETE
routes.get('/devs', DevController.index );
routes.post('/devs', DevController.store );
routes.post('/devs/:devId/likes', LikeController.store );
routes.post('/devs/:devId/dislikes', DislikeController.store );

module.exports = routes;