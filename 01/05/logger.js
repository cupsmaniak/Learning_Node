const EventEmitter = require('events');


var url = 'http://mylogger.io/log';
class Logger extends EventEmitter{
    log(message){
    console.log(message);
// Raise an event
    this.emit('messangelogged',{id:1,'url':'http://'});

}  
}


module.exports=Logger;