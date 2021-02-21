
const WebSocket = require('ws');

const PORT = 4999;

const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.on('connection', function (socket){

    // Some feedback on the console
    console.log("A client just connected right now");

    // Attach some behavior to the incoming socket
    socket.on('message', function(msg){
        console.log('Recieved message from client: ' + msg);

        //socket.send("Take this back: " + msg);

        // Broadcast that msg to all connected clients
        wsServer.clients.forEach(function(client){
            client.send("Some one said: " + msg);
        });
    });
});

console.log((new Date()) + " Server is listening on port " + PORT);