const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymenttSchema = new Schema({
    
    email : {
        type : String,
        required: true
        }
})

const Paypal = mongoose.model("Paypal",paymenttSchema);

module.exports = Paypal;