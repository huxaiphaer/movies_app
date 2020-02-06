import React from 'react';
import '../styles/App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Landing} from "./Landing";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Footer/>
    </div>
  );
}

export default App;
