const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { required } = require("nodemon/lib/config");
const app = express();
require("dotenv").config();



const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,async(err)=>{
    if(err) throw err;
    console.log("Conncted to Paymen Database")
});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongodb Connected");
});

const paypalRouter = require("./routes/paypal.js");
const Paypal = require("./models/paypalpayment");

app.use("/paypal", paypalRouter);

const cardpayRouter = require("./routes/cardpay.js");
const Cardpay = require("./models/cardpayment");

app.use("/cardpay", cardpayRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
});