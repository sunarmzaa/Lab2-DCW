var net = require('net');
var HOST = 'coin.werapun.com';
var PORT = 6969;
net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
       console.log('DATA ' + sock.remoteAddress + ': ' + data);
       sock.write('You said "' + data + '"');
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);