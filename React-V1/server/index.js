const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
const {mongoURI} = require('./config/dev')
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());
//Giving access to itch.io
// app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
// app.use(cors({
//     origin: ['cryptostein.itch.io/','cryptostein.itch.io/plearn', 'itch.io/'],
//     optionsSuccessStatus: 200 
// }));
// app.options("*", cors());
// var allowedOrigins = ['*'];
// app.use(function (req, res, next) {
//     var origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//         res.setHeader("Access-Control-Allow-Origin", origin);
//         // res.setHeader('X-Frame-Options', 'allow');
//         // res.setHeader('X-Frame-Options', 'SAMEORIGIN');
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
//     });

const router = require("./routes/routes");
app.use("/", router);

// Database Connection
mongoose.connect(mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => {
        console.log("Your DB is connected.");
    }
)

app.get('/test', (req,res) => {
    res.send("Hello User");
})

//Start the server
app.listen(process.env.PORT || 8080,() => {
    console.log("Backend Started!");
});