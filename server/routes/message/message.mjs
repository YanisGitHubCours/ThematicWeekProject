import express from 'express'

const router = express.Router()

router.post('/message', (req, res) => {
    res.send('message create')
})

router.get('/message', (req, res) => {
    res.send("message read")
})

router.patch('/message', (req, res) => {
    res.send("message update")
})

router.delete('/message', (req, res) => {
    res.send("message delete")
})


export default router