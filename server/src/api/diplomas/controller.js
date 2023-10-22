const { Router } = require('express')
const router = Router()

const service = require('./service')

router.get('/', service.getDiplomas)
router.post('/', service.addDiploma)
router.get('/:id', service.getDiploma)
router.put('/:id', service.updateDiploma)
router.delete('/:id', service.deleteDiploma)


module.exports = router
