const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

app.use(cors({credentials: true, origin: process.env.CLIENT_URL}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: URL,
        dbName: process.env.DBNAME,
        ttl: 24*60*60,
    })
}))


app.use('/api',require("./src/route/route"));

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
        app.listen(PORT, () => {
            console.log(`Server listen on ${PORT}`)
        })
    )
    .catch((erorr) => {
        console.log(erorr.message);
    })


    //cong viec ngay mai:
    //viet middleware authen, => check session gui len con` han. k, neu' con` thi` 
    // refresh chung', neu' het thi` bat dang nhap lai