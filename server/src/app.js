const express = require('express')
const cors = require('cors')

const diploma = require('./api/diplomas/controller')
const student = require('./api/students/controller')

const init_app = () => {
    
    const app = express()

    app.use(cors())
    app.use(express.json())
    

    return app
}

module.exports = init_app

