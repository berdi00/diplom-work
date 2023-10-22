const { Router } = require('express')
const router = Router()

const service = require('./service')

router.get('/', service.getStudents)
router.post('/', service.addStudent)
router.get('/:id', service.getStudent)
router.put('/:id', service.updateStudent)
router.delete('/:id', service.deleteStudent)


module.exports = router
