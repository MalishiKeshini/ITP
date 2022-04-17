const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardpaymenttSchema = new Schema({

    cardnumber : {
        type : String,
        required: true
        },
    
    month : {
        type : String,
        required: true
        },
    year : {
        type : String,
        required: true
        },
    cvv : {
        type : Number,
        required: true
        },
    nameoncard: {
        type : String,
        required: true
        },
    phone: {
        type : Number,
        required: true
        }

        
})

const Cardpay = mongoose.model("Cardpay",cardpaymenttSchema);

module.exports = Cardpay;