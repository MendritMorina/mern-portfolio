import React, {useState} from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Admin from "./screens/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Tailwind
//h-screen = height: 100vh
//items-center = align-items: center (horizontal center)
//justify-center = align-items: center (vertical center)
//font-semibold = font-weight: 600;
//items-start = align-items: flex-start
//.px-40 = padding-left AND padding-right
//.py-40 = padding-top AND padding-bottom
//border-2 = border-width
//rounded = border-radius
