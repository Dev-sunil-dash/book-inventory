const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8000;


// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

//mongodb connection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:BRtuZhiTB07PeVVv@book-inventory.gy4wn.mongodb.net/?retryWrites=true&w=majority&appName=book-inventory";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //create a collection of documents
        const bookCollection = client.db("BookInventory").collection("books");

        //insert book to the db: post method
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await bookCollection.insertOne(data);
            res.send(result);
        })

        //get all books: get method
        app.get("/all-books", async (req, res) => {
            const allBooks = await bookCollection.find().toArray();
            res.send(allBooks);
        })

        //update book: put or patch method
        app.patch('/book/:id', async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const updatedBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    ...updatedBookData
                }
            }
            //update
            const result = await bookCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        //delete book: delete method
        app.delete('/book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollection.deleteOne(filter);
            res.send(result);
        })

        //find by category
        app.get('/books-category', async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollection.find(query).toArray();
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})