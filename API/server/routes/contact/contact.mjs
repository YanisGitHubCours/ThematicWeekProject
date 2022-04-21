import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'
const app = express.Router()

let database = "EmailingDb"
let collection = "contact"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


await client.connect();

(async () => {
    app.get('/contact/:name', async (req, res) => {

        const name = req.params.name
        const response = await client.db(database).collection(collection).find({ "name": name }).toArray();
        res.send(response)
    });

    app.delete('/contact/:mail', async (req, res) => {

        const mail = req.params.mail;

        const response = await client.db(database).collection(collection).deleteOne({ "mail": mail });

        res.send(response)

    })

    app.post('/contact', async (req, res) => {
        const json = req.body;
        const response = await client.db(database).collection(collection).insertOne(json);

        res.send(response)
    });

    app.patch('/contact/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        const oId = ObjectId(id);

        const json = req.body;

        const response = await client.db(database).collection(collection).updateOne({ "_id": oId }, { $set: { "text": json.text } });

        res.send(response);
    });
})();


export default app

