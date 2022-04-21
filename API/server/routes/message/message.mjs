import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'
const router = express.Router()

let database = "EmailingDb"
let collection = "message"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


await client.connect();

(async () => {
    router.post('/message', async (req, res) => {
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
})();


export default router