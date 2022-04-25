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
    app.get('/state/', async (req, res) => {

    });

    // app.delete('/contact/:mail', async (req, res) => {

    // })

    // app.post('/contact', async (req, res) => {
  
    // });

    // app.patch('/contact/:id', async (req, res) => {

    // });
})();


export default app

