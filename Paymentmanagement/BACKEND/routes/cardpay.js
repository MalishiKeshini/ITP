const router = require("express").Router();
const { response } = require("express");
let Cardpay = require("../models/cardpayment");

router.route("/add").post((req,res) => {

    const cardnumber = req.body.cardnumber;
    const month = req.body.month;
    const year = req.body.year;
    const cvv = req.body.cvv;
    const nameoncard = req.body.nameoncard;
    const phone = req.body.phone;

    const newCardpay = new Cardpay({
        cardnumber,
        month,
        year,
        cvv,
        nameoncard,
        phone
    })

    newCardpay.save().then(() => {
        res.json("Card Details Added")
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error With Adding Email", Error: err.message});
    })
})

router.route("/view").get((req,res) => {

    Cardpay.find().then((Cardpay) => {
        res.json(Cardpay)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error Viewing  Email", Error: err.message});
    })
})

router.route("/update/:id").put(async (req,res) => {

    let CardId = req.params.id;
    const cardnumber = req.body.cardnumber;
    const month = req.body.month;
    const year = req.body.year;
    const cvv = req.body.cvv;
    const nameoncard = req.body.nameoncard;
    const phone = req.body.phone;

    const updatecard = {
        cardnumber,
        month,
        year,
        cvv,
        nameoncard,
        phone
    }

    const update = await Cardpay.findByIdAndUpdate(CardId, updatecard)
    .then(() =>{
        res.status(200).send({status: "Card Details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error With Updating Data", Error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {

    let CardId = req.params.id;

    await Cardpay.findByIdAndDelete(CardId)
    .then(() => {
        res.status(200).send({status: "Card Details Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error With Deleting Card Details", Error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {

    let CardId = req.params.id;

    const card = await Cardpay.findById(CardId)
    .then((cardpay) =>{
        res.status(200).send({status: "------Card Details-----", cardpay})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error With Deleting Email", Error: err.message});
    })
})

module.exports = router;