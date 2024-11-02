import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar ,Deals, Footer } from "./Components"
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ErrorPage from "./Pages/ErrorPage";
import OutletPage from "./Pages/OutletPage";
import ProductDetail from "./Pages/ProductDetail";
import ProductCart from "./Pages/ProductCart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UserProfile from "./Components/UserProfile";
import Payment from "./Components/Payment";
const App = () => {
  return (
    <BrowserRouter>
      <Deals />  {/*Deal Header*/}
      <Navbar/>  {/*Navbar*/}
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/outlet" element={<OutletPage/>}/>
        <Route path="/cart" element={<ProductCart/>}/>
        <Route path="/productDetail/:_id" element={<ProductDetail/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<UserProfile/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
      <Footer/>   {/*Footer*/}
    </BrowserRouter>
  );
};

export default App;
