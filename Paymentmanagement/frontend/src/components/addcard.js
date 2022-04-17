import React,{useState} from "react";
import axios from "axios";


function AddCard(){

    const [cardnumber,setCardnumber] = useState("");
    const [month,setMonth] = useState("");
    const [year,setYear] = useState("");
    const [cvv,setCvv] = useState("");
    const [nameoncard,setNameoncard] = useState("");
    const [phone,setPhone] = useState("");

    function sendData(e){
        e.preventDefault();

        const newCard = {
            cardnumber,
            month,
            year,
            cvv,
            nameoncard,
            phone
        }
        
        axios.post("http://localhost:8070/cardpay/add", newCard).then(()=>{

            alert("Card Details Added")
            

        }).catch((err)=>{
            alert(err)
        })

    }

return(
        <center>
        <div>
           
        <form onSubmit={sendData}>
            <div className="container">
                
                <label for="cardnum">Enter Your Card Number</label>
                <input type="cardnum" className="form-control" id="cardnum" placeholder="Enter Card Number" 
                onChange={(e)=>{

                    setCardnumber(e.target.value);

                }} />
                
                <label for="year">Enter Year</label>
                <input type="year" className="form-control" id="year" placeholder="Enter year" 
                onChange={(e)=>{

                    setYear(e.target.value);

                }} />


                <label for="mase">Enter Month</label>
                <input type="mase" className="form-control" id="mase" placeholder="Enter Month" 
                onChange={(e)=>{

                    setMonth(e.target.value);

                }} />

                <label for="cvv">Enter The Security Number(CVV)</label>
                <input type="cvv" className="form-control" id="cvv" placeholder="Enter CVV" 
                onChange={(e)=>{

                    setCvv(e.target.value);

                }} />

                <label for="nameoncard">Enter Your Name On Card</label>
                <input type="nameoncard" className="form-control" id="nameoncard" placeholder="Enter name on card" 
                onChange={(e)=>{

                    setNameoncard(e.target.value);

                }} />

                <label for="phone">Enter Your Phone Number</label>
                <input type="phone" className="form-control" id="phone" placeholder="Enter phone" 
                onChange={(e)=>{

                    setPhone(e.target.value);

                }} />
                <small id="CardHelp" className="form-text text-muted">We'll never share your Card Details with anyone else.</small>
               
                </div>
                <br></br>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
        </center>
    
)

}
export default AddCard;