import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home";
import Contact from "./Components/contact";
import About from "./Components/about";
import NavBar from './Components/NavBar';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/signup"element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
