import express from 'express'

const router = express.Router()

router.post('/list-contact', (req, res) => {
    res.send('liste-contact create')
})

router.get('/list-contact', (req, res) => {
    res.send("liste-contact read")
})

router.patch('/list-contact', (req, res) => {
    res.send("liste-contact update")
})

router.delete('/list-contact', (req, res) => {
    res.send("liste-contact delete")
})


export default router