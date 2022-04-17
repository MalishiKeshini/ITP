/*import React,{Component} from "react";
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }
}

retrievePhosts(){
  axios.get("http://localhost:8000").then(res =>{
    if(res.data.success)
  })
}

render() {
  return(
    <div>


    </div>
  )
}*/


import React,{Component} from "react";
import Header from './components/header';
import AddPaypal from './components/addpaypal';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AllEmail from './components/allemails';
import AddCard from "./components/addcard";
import AllCard from "./components/allcard";

function App() {
  return (
      <Router>
        <div>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <Route path="/add" exact component ={AddPaypal}/>
        <Route path="/viewall" exact component ={AllEmail}/>
        <Route path="/cardadd" exact component ={AddCard}/>
        <Route path="/viewCard" exact component ={AllCard}/>
       
        
        </div>
      </Router>
  

  );
}

export default App;
