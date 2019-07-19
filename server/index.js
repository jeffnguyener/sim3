require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
app.use(express.json())

const ctrl = require('./controller')

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

//GET ENDPOINTS
app.get('/auth/logout', ctrl.logout)
app.get('/auth/usersposts', ctrl.getPosts)
app.get('/auth/userinfo', ctrl.getUserInfo)

//POST ENDPOINTS
app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

app.post('/user/newpost', ctrl.newPosts)

//PUT ENDPOINTS


//DELETE ENDPOINTS

app.use(checkForSession)

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('Database is running 👌', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`Speeding through port ${SERVER_PORT}`))
})