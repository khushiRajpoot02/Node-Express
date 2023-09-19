const EventEmitter = require('events');
// creating instance of EventEmitter
const customEventEmitter = new EventEmitter();
// calling method of EventEmitter
customEventEmitter.on('response', (name, id)=>{
  console.log(`data recieved with: ${name}, ${id}`);
})
// as many method i can call
customEventEmitter.on('response', ()=>{
  console.log('2nd time called');
})
// at last we have to emit 
customEventEmitter.emit('response',"khushi", 1);
