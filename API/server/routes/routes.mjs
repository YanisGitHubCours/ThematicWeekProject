import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('home')
})

router.get('/contact', (req, res) => {
    res.send("contact")
})

router.get('/liste-contact', (req, res) => {
    res.send("liste des contacts")
})

router.get('/status-message', (req, res) => {
    res.send("status message")
})

router.get('/message', (req, res) => {
    res.send("message")
})

router.get('/templates', (req, res) => {
    res.send("templates")
})

export default router
