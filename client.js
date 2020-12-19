import axios from 'axios'
import io from 'socket.io-client';
import readline from 'readline'
const server = 'http://localhost:8081' // Hay que poner el puerto con el que se ha iniciado el servidor principal
const socket = io(server)
socket.on('msg', function (msg) {
    console.log('Received:' + msg.msg)
})

async function sendMsg(msg){
    try { 
        await axios.put(server + '/msg', {msg})
    }
    catch (error){
        console.log(error)
    }
}
const rl = readline.createInterface(process.stdin, process.stdout)
rl.on('line', function (line) {
    sendMsg(line)
})

