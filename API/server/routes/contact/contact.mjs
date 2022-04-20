import express from 'express'

const app = express.Router()

// router.post('/contact', (req, res) => {
//     res.send('contact create')
// })

// router.get('/contact', (req, res) => {
//     res.send("contact read")
// })

// router.patch('/contact', (req, res) => {
//     res.send("contact update")
// })

// router.delete('/contact', (req, res) => {
//     res.send("contact delete")
// })

app.use(express.json());

let database = ""
let collection = "contact"


const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
// Need to out the mongo URI in the dotenv file
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async () => {
    await client.connect();

    app.get('/contact', async (req, res) => {

        let id = parseInt(req.params.id);

        let response = await client.db(database).collection(collection).find({"userId": id}).toArray();

        res.status(200).send(response);        
    });

    app.delete('/contact/:id', async(req, res) => {

        let id = req.params.id;
        let oId = mongo.ObjectId(id);

        await client.db(database).collection(collection).deleteOne({"_id": oId});

        res.status(200).send({})

    })

    app.post('/contact', async (req, res) => {
        let json = req.body;
        await client.db(database).collection(collection).insertOne(json);
		
        res.status(200).send({})
    });

    app.patch('/comment/:id', async (req, res) => {
        let id = req.params.id;
        let oId = mongo.ObjectId(id);

        let json = req.body;

        await client.db(database).collection(collection).updateOne({"_id": oId}, {$set: {"text": json.text }});

        res.status(200).send({});
    });

})();

// demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT, () => {
    console.log(`Example app listening at http://https://benevold.herokuapp.com/:${PORT}`);
  });


export default router
