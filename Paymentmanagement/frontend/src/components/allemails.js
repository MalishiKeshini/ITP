import React,{useState,useEffect} from "react";
import axios from "axios";

export default function AllEmail(){

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        function getEmils(){
            axios.get("http://localhost:8070/paypal/view").then((res)=>{

                console.log(res.data);
                setEmails(res.data);

            }).catch((err)=>{
                alert(err.message)
            })
        }
        getEmils();
    }, [])

    return(
        <div className="container">
            <hi>All Paypal Emails</hi>
        </div>

    )

}