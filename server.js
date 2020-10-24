import express from 'express'
import {startSocket, broadcastMsg} from './socket.js'
import bodyParser from "body-parser"

const PORT = 8080
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({​​​​​​​​extended: false}​​​​​​​​))

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
