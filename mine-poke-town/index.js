import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use('/public', express.static('public', {}) )
app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
})
// console.log(path.resolve())
let users = []

io.on('connection', (socket) => {
    // console.log('users', users)
    // console.log(`${socket.id} a user connected`)
    users.push({id: socket.id, x:0, y:0})

    socket.on('disconnect', () => {
        // console.log(`${socket.id} - log user disconnected`)
        users = users.filter(user => user.id !== socket.id)
        // users.
    })

    socket.on('ON_USER_MOVE', newPosition => {
    
        users.find( user => {
            if(user.id !== socket.id){
                return user
            }
            console.log(`${socket.id} x: ${user.x} y: ${user.y}`)
            return {
                x: user.x + (newPosition.move.x || 0),
                y: user.y + (newPosition.move.y || 0)
            }
        })
        io.emit('ON_USERS_UPDATE', JSON.stringify(users))
    })
})
server.listen(8000, () => console.log('HTTP SERVER RUN!'))
