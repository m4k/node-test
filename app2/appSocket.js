var io = require('socket.io')(3000);

io.on('connection', (socket)=>{
  console.log('novo usuario conectado');

  socket.on('client_hello', (data)=>{
    //socket.broadcast.emit
    io.socket.emit('server_hello', data);
  });

});
