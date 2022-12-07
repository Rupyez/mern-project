
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/checkout/Checkout"
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
function App() {
  return (
  
<BrowserRouter>
    <div className="App">
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/login" element={<Login/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/payment" element={<Payment/>}/>


  </Routes>

    
   
    </div>
</BrowserRouter>

    
  );
}

export default App;
