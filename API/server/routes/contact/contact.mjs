import express from 'express'

const router = express.Router()

router.post('/contact', (req, res) => {
    res.send('contact create')
})

router.get('/contact', (req, res) => {
    res.send("contact read")
})

router.patch('/contact', (req, res) => {
    res.send("contact update")
})

router.delete('/contact', (req, res) => {
    res.send("contact delete")
})


export default router
