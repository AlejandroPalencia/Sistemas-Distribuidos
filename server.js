import express from 'express'
import {startSocket} from './socket.js'
const PORT = 8080
const app = express()
app.get('/', (req, res) => {
 res.send('Hello World I am running locally')})
const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
startSocket(server)