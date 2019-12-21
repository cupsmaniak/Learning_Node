const EventEmitter = require('events');
const Logger =require('./logger');
const logger = new Logger();

// making a noise, produce - signalling an Event will happen
// Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);

});

logger.log('message');
