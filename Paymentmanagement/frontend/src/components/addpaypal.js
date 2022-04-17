import React,{useState} from "react";
import axios from "axios";


function AddPaypal(){

    const [email,setEmail] = useState("");

    function sendData(e){
        e.preventDefault();

        const newEmaiil = {
            email
        }
        
        axios.post("http://localhost:8070/paypal/add", newEmaiil).then(()=>{

            alert("Email Added")
         

        }).catch((err)=>{
            alert(err)
        })

    }

return(
        <center>
        <div>
           
        <form onSubmit={sendData}>
            <div className="container">
                
                <label for="email">Enter Your Paypal Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" 
                onChange={(e)=>{

                    setEmail(e.target.value);

                }} />


                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
               
                </div>
                <br></br>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
        </center>
    
)

}
export default AddPaypal;