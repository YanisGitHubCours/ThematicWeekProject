import express from 'express'

const router = express.Router()

router.post('/status-message', (req, res) => {
    res.send('status-message create')
})

router.get('/status-message', (req, res) => {
    res.send("status-message read")
})

router.patch('/status-message', (req, res) => {
    res.send("status-message update")
})

router.delete('/status-message', (req, res) => {
    res.send("status-message delete")
})


export default router