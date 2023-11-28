const pool = require('../../../db')
const queries = require('./repository')


const getDiplomas = async (req, res) => {
    const { rows } = await pool.query(queries.retrieveDiplomas)

    res.status(200).json({diplomas: rows})
}


const addDiploma = async (req, res) => {
    
    const info = req.body

    const { rows } = await pool.query(queries.createDiploma, [info.name, info.description, info.deadline])

    res.send(rows)
}


const getDiploma = async (req, res) => {
    const id = req.params.id

    const { rows } = await pool.query(queries.retrieveDiploma, [id])
    
    res.status(200).json({diplomas: rows})
}


const updateDiploma = async (req, res) => {

    const id = req.params.id

    const info = req.body

    await pool.query(queries.changeDiploma, [info.name, info.description, info.deadline, id])

    res.sendStatus(200)
}


const deleteDiploma = async (req, res) => {
    const id = req.params.id

    await pool.query(queries.destroyDiploma, [id])
    
    res.sendStatus(200)
}


module.exports = {
    getDiplomas,
    addDiploma,
    getDiploma,
    updateDiploma,
    deleteDiploma
}