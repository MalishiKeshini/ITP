import React from "react";
import {Link} from 'react-router-dom'

function header(){

    return(
      <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="https://www.eatlogos.com/alphabet_logos/png/vector_blue_a_letter_logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
            Elite Tourism
          </a>
      
            <a className="nav-link" href="/add">Paypal Payment</a>
            <a className="nav-link" href="/cardadd">Card Payment</a>
            <a className="nav-link" href="/viewall">Paypal Email View</a>
            <a className="nav-link" href="/viewCard">Card Details View</a>
    
            
         
      </nav>


        /*<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{color:"blue"}}>Elite Tourism</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                
              <a className="nav-link" href="/add">Payment</a>*/
         
    )
}   

export default header;