import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'
const app = express.Router()

let database = "EmailingDb"
let collection = "state"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


await client.connect();

(async () => {

    app.get('/state/', async (req, res) => {

        const response = await client.db(database).collection(collection).find({ "label": "Prêt" }).toArray()

        res.send(response)
    })

    app.delete('/state/:id', async (req, res) => {
        const id = ObjectId(req.params.id)

        const response = await client.db(database).collection(collection).deleteOne({ "_id": id });

        res.send(response)
    })

    app.post('/state', async (req, res) => {
        const json = req.body;
        const response = await client.db(database).collection(collection).insertOne(json);

        res.send(response)
    })

    app.patch('/state/:id', async (req, res) => {
        const id = ObjectId(req.params.id)

        const json = req.body;

        const response = await client.db(database).collection(collection).updateOne({ "_id": id }, { $set: { "text": json.text } });

        res.send(response);
    })
})();


export default app

