import express from 'express'
import {startSocket, broadcastMsg} from './socket.js'
import bodyParser from 'body-parser'
import ngrok from 'ngrok'
import axios from 'axios'

import {startNGrok} from './ngrok.js'
//import {fasync, awaitAll} from './utils.js'

//const PORT = 8080
async function start(ID, PORT, CN_URL){


    // Ngrok para obtener la url del servidor
    let ngURL = ''
        try {
        ngURL = await startNGrok(PORT)
    }
    catch(error){
        throw new Error(error)
    }

    let n = {url:ngURL,id:ID} 
    let lista_nodos = new Array(n)
    
    // Inicialización del objeto app
    const app = express()

    // Parsear el body de las peticiones
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    //Configuraciones de servidor
    app.get('/', (req, res) => {
        res.send('Hello World I am running locally')})

    app.get('/nodes', (req, res) => {
        res.send(lista_nodos)}
    )
    
   
    app.get('/nodes/:id?', (req, res) => {
        res.send(lista_nodos.find(Node => Node.id == req.params.id))
    
    })

    app.put('/msg', (req, res) => {
        console.log('msg received')
        const msg = req.body
        res.send('OK')
        // send the message back (eco)
        broadcastMsg(msg)
    })
    app.put('/nodes/:id?', (req, res) => {
        let object_JSON = {id: req.params.id, url: req.body}
        lista_nodos = [...lista_nodos,object_JSON]
    })


    process.on('SIGINT', async (code) => {
        await console.log('Process before Exit event with code: ', code) //Funcionalidad para cerrar servidor con ctrl+c
        process.exit() 
    })        //Aquí iría todo el código para configurar con Express los servidores


    
    //let longitud_nodos = lista_nodos.length
    const url_server = ngURL
    let lista = ''
    if (args.length === 3){
        try{
            const lista = await axios.get(CN_URL+'/nodes')
            await Promise.all(lista.data.map(x => axios.put(x.url+'/nodes/'+ID, {url:url_server})))
            console.log(lista.data)
        } 
        catch(error){
            console.log(error)
        }
    }
    

    // Una vez configurado el servidor, se pone a la escucha
    const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
    startSocket(server)

}

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
    }
    
