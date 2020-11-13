import express from 'express'
import {startSocket, broadcastMsg} from './socket.js'
import bodyParser from 'body-parser'
//import {startNGrok} from './ngrok.js'
//const url = await startNGrok(PORT)


const PORT = 8080
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World I am running locally')})

const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
startSocket(server)

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