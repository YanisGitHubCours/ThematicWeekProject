import express from 'express'

const router = express.Router()

router.post('/static', (req, res) => {
    res.send('static create')
})

router.get('/static', (req, res) => {
    res.send("static read")
})

router.patch('/static', (req, res) => {
    res.send("static update")
})

router.delete('/static', (req, res) => {
    res.send("static delete")
})


export default router