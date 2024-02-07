import React from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./screens/Home";

function App() {
  //h-screen = height: 100vh
  //items-center = align-items: center (horizontal center)
  //justify-center = align-items: center (vertical center)
  //font-semibold = font-weight: 600;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
