const express = require('express') ; 
const Router = express.Router() ;
const queueController = require('../Controllers/queue.controller') ; 

Router.get('/queues', queueController.getQueue) ; 
Router.post('/queues', queueController.createQueue) ; 

module.exports = Router ;