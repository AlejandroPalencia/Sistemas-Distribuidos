import socketIO from 'socket.io'

let io = null

export function startSocket(server, callback){
    io = socketIO(server)
    io.on('connection', (socket) => {
        console.log('a user connected')
        socket.on('disconnect', () => {
            console.log('user disconnected');
        })
        socket.on('msg', callback )
    })
}


export function broadcastMsg(msg){
    // enviamos msg a todos, con el tipo de evento 'msg'
    if (io)
        io.emit('msg', msg)
    else console.error("Call startSocket(server) before sending messages")
   }

