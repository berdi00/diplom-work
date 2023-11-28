const pool = require('../../../db')
const queries = require('./repository')


const getStudents = async (req, res) => {

    const searchBy = req.query.qr_id

    if (searchBy != null) {
        const { rows } = await pool.query(queries.searchBy, [`%${searchBy}%`])

        res.status(200).json({students: rows})
    } else {
        const { rows } = await pool.query(queries.retrieveStudents)

        res.status(200).json({students: rows})
    }    
}


const addStudent = async (req, res) => {

    const info = req.body

    const { rows } = await pool.query(queries.createStudent, [info.name, info.qr_id, info.role, info.diplom_id])

    res.send(rows)

}


const getStudent = async (req, res) => {
    const id = req.params.id

    const { rows } = await pool.query(queries.retrieveStudent, [id])
    
    res.status(200).json({students: rows})
}


const getStudentByQrId = async (req, res) => {
    const id = req.params.qr_id

    const { rows } = await pool.query(queries.retrieveStudentByQrId, [id])
    
    res.status(200).json({students: rows})
}


const getStudentHimself = async (req, res) => {
    const id = req.params.id

    const { rows } = await pool.query(queries.retrieveStudentHimself, [id])
    
    res.status(200).json({students: rows})
}


const updateStudent = async (req, res) => {
    
    const id = req.params.id
    const info = req.body

    await pool.query(queries.changeStudent, [info.name, info.qr_id, info.role, info.diplom_id, id])

    res.sendStatus(200)
}


const deleteStudent = async (req, res) => {
    
    const id = req.params.id

    await pool.query(queries.destroyStudent, [id])

    res.sendStatus(200)
}


module.exports = {
    getStudents,
    addStudent,
    getStudent,
    getStudentHimself,
    getStudentByQrId,
    updateStudent,
    deleteStudent
}