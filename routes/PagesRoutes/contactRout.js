const express = require('express')
const router = express.Router()

const contactController = require('../../Controllers/PagesControllers/contactController')
router.get('/',(req,res) => {
    res.send("waa uu shaqeenaa hada")
})

router.get('/:id', contactController.GetContactById)

router.post('/', contactController.PostContact)

router.put('/:id', contactController.PutContact)

module.exports = router
