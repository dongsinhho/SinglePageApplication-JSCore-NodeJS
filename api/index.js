const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: URL,
        dbName: "session current"
    })
}))

app.get('/', (req, res) => {
    res.send('ok');
})

mongoose
    .connect(URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() =>
        app.listen(port, () => {
            console.log(`Server listen on ${PORT}`)
        })
    )
    .catch((erorr) => {
        console.log(erorr.message);
    })
