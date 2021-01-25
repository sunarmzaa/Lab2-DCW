var net = require('net');
var HOST = 'coin.werapun.com';
var PORT = 6969;
let i = 5;
var client = new net.Socket();

client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('6035512024');
});

client.on('data', function (data) {
    console.log('DATA : ' + data)
    if (data.toString() == 'OK') {
        console.log("First try: ", i)
        client.write(i.toString());
        i++;
    }
    else if(data.toString() == 'WRONG') {
        console.log("Try again: ", i)
        client.write(i.toString());
        i++;
    }
    else if(data.toString() == 'BINGO') {
        console.log("Yes I WON: ", i)
        client.destroy();
    }
    else{
        console.log('Something wrong')
    
}
});

// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});
