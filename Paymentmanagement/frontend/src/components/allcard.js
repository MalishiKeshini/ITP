import React,{useState,useEffect} from "react";
import axios from "axios";

export default function AllCard(){

    const [cards, setCards] = useState([]);
    

    useEffect(() => {
        function getCards(){
            axios.get("http://localhost:8070/cardpay/view").then((res)=>{

                console.log(res.data);
                setCards(res.data);

            }).catch((err)=>{
                alert(err.message)
            })
        }
        getCards();
    }, [])

    return(
        <div className="container">
            <hi>All Card Details</hi>
        </div>

    )

}