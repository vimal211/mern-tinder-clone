import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbcard.js';
import Cors from 'cors';

//App config
const app=express();
const port=process.env.PORT||3001;
const mongo_url='mongodb+srv://Admin:<password>@cluster0.afqw9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Middleware
app.use(express.json());
app.use(Cors())

//DB config
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API endpoints
app.get("/", (req, res) => {res.status(200).send("Hello")});

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
  
    Cards.create(dbCard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });
  
  app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

//API listeners
app.listen(port,()=>{
    console.log(`Server listening on localhost ${port}`)
})