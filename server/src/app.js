const express = require('express')
const cors = require('cors')

const diploma = require('./api/diplomas/controller')
const student = require('./api/students/controller')

const diplomaUpload = require('./imgUpload/diplomas')
const diplomaFileUpload = require('./imgUpload/diplomaFile')
const studentUpload = require('./imgUpload/students')

const init_app = () => {
    
    const app = express()

    app.use(cors())
    app.use(express.json())
    
    app.use('/diplomas', diploma)
    app.use('/students', student)
    app.use('/diplomas', diplomaUpload)
    app.use('/diplomas/files', diplomaFileUpload)
    app.use('/students', studentUpload)

    app.use('/students/images', express.static('./src/api/static/studentsImage'))
    app.use('/diplomas/images', express.static('./src/api/static/diplomasImage'))
    app.use('/diplomas/files', express.static('./src/api/static/diplomaFiles'))

    return app
}

module.exports = init_app
