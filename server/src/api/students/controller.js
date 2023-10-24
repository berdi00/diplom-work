const { Router } = require('express')
const router = Router()

const service = require('./service')

router.get('/', service.getStudents)
router.post('/', service.addStudent)
router.get('/:id', service.getStudent) // will get students belonging to the ":id" of the diploma
router.get('/himself/:id', service.getStudentHimself) // will get students by ":id"
router.put('/:id', service.updateStudent)
router.delete('/:id', service.deleteStudent)


module.exports = router
