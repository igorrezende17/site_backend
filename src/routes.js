const express = require('express');

const OngController = require('./controllers/Ongcontroller'); 
const IncidentController = require('./controllers/Incidentcontroller'); 
const ProfileController = require('./controllers/Profilecontroller'); 
const SessionController = require('./controllers/Sessioncontroller'); 

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index); 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;