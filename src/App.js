import React from "react"
import Header from "./components/Header"
import {Meme} from "./components/Meme"
import {MemeGenerated} from "./components/MemeGenerated"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./style.css"
function App() {
  return (
    <div>
     <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<Meme />} />
        <Route path='/generated' element = {<MemeGenerated />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
