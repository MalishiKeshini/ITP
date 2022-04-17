const router = require("express").Router();
const { response } = require("express");
let Paypal = require("../models/paypalpayment");

router.route("/add").post((req,res) => {

    const email = req.body.email;

    const newPaypal = new Paypal({
        email
    })

    newPaypal.save().then(() => {
        res.json("Paypal Email Added")
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error With Adding Email", Error: err.message});
    })
})

router.route("/view").get((req,res) => {

    Paypal.find().then((paypal) => {
        res.json(paypal)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error Viewing  Email", Error: err.message});
    })
})

router.route("/update/:id").put(async (req,res) => {

    let emailId = req.params.id;
    const email = req.body.email;

    const updatepaypal = {
        email
    }

    const update = await Paypal.findByIdAndUpdate(emailId, updatepaypal)
    .then(() =>{
        res.status(200).send({status: "Email Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error With Updating Data", Error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {

    let emailId = req.params.id;

    await Paypal.findByIdAndDelete(emailId)
    .then(() => {
        res.status(200).send({status: "Email Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error With Deleting Email", Error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {

    let emailId = req.params.id;

    const email = await Paypal.findById(emailId)
    .then((Paypal) =>{
        res.status(200).send({status: "-------Email Details------", Paypal})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error With Deleting Email", Error: err.message});
    })
})

module.exports = router;