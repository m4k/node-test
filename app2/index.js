var EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('meu_evento', function (numero) {
  console.log('meu_evento', numero);
});

emitter.emit('meu_evento', 314);
