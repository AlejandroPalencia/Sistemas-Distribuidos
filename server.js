import express from 'express'
import {startSocket, broadcastMsg} from './socket.js'
import bodyParser from 'body-parser'
import ngrok from 'ngrok'

//import {startNGrok} from './ngrok.js'
//const url = await startNGrok(PORT)


const PORT = 8080
// Código añadido para coger puerto por línea de comandos
const args = process.argv.slice(2)
if (args.length===0){
  console.log("uso: ./node server.js IDNodo [Puerto escucha] [Dirección a conectar]")
  console.log("Por defecto se escucha en el puerto 8080 y no se conecta a ningún nodo")
}
else {
    const ID = args.length > 0 ? args[0] : 'NOID' //Pasar ID del nodo como primer argumento
    const PORT = args.length > 1 ? parseInt(args[1]) : 8080 // Puerto por defecto en el segundo argumento
    const Node = args.length > 2 ? args[2] : '' // La dirección del nodo al que conectar es el tercer argumento
    // Fin lectura argumentos
    start(ID, PORT, Node).then(()=>console.log("Servidor iniciado"))
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/', (req, res) => {
        res.send('Hello World I am running locally')})

    const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
    startSocket(server)
    }

    let ngURL = ''

    export const startNGrok = async function(PORT) {
        const url = await ngrok.connect({
            proto : 'http',
            ddr : PORT,
        }, )
        ngURL = url
        console.log (url)
        return url
    }      

    app.put('/msg', (req, res) => {
        console.log('msg received')
        const msg = req.body
        res.send('OK')
        // send the message back (eco)
        broadcastMsg(msg)
    })

    process.on('SIGINT', async (code) => {

        await console.log('Process before Exit event with code: ', code) //Funcionalidad para cerrar servidor con ctrl+c
        process.exit() 
    })






