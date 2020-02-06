import React from 'react';
import '../styles/App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Landing} from "./Landing";
import store from "../store/store";
import {Provider} from "react-redux";

function App() {
  return (
        <Provider store={store}>
            <Navbar/>
            <Landing/>
            <Footer/>
        </Provider>
  );
}

export default App;
