
const retrieveDiplomas = `SELECT * FROM diplomas`

const createDiploma = `
    INSERT INTO diplomas (name, description, deadline) VALUES ($1, $2, $3)
`

const retrieveDiploma = `SELECT * FROM diplomas WHERE id = $1`

const changeDiploma = `UPDATE diplomas SET name = $1, description = $2, deadline = $3 WHERE id = $4`

const destroyDiploma = `DELETE FROM diplomas WHERE id = $1`



module.exports = {
    retrieveDiplomas,
    createDiploma,
    retrieveDiploma,
    changeDiploma,
    destroyDiploma
}