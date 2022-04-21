import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'

let database = "EmailingDb"
let collection = "contact"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


await client.connect();

const getContact = async (name) => {
    const response = await client.db(database).collection(collection).find({ "name": name }).toArray();
    return response
}

export default { getContact }