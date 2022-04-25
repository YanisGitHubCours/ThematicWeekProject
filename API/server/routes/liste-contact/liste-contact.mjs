import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'
const router = express.Router()


let database = "EmailingDb"
let collection = "rel_contact-list"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


await client.connect();

(async () => {
    router.post('/list-contact', async (req, res) => {
        const json = req.body;
        const response = await client.db(database).collection(collection).insertOne(json);

        res.send(response)
    })

    router.get('/list-contact/:id', async (req, res) => {
        const id = ObjectId(req.params.id)

        const response = await client.db(database).collection(collection).find({ "_id": id }).toArray()

        res.send(response)
    })

    router.patch('/list-contact/:id', async (req, res) => {
        const id = ObjectId(req.params.id);
        const json = req.body;

        const response = await client.db(database).collection(collection).updateOne({ "_id": id }, { $set: { "text": json.text } });

        res.send(response);
    })

    router.delete('/list-contact/:id', async (req, res) => {
        const id = ObjectId(req.params.id)

        const response = await client.db(database).collection(collection).deleteOne({ "_id": id });

        res.send(response)
    })

})();

export default router