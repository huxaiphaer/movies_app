import React from 'react';
import '../styles/App.css';
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import store from "../store/store";
import {Provider} from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";
import Movie from "./Movie";

function App() {
  return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/movie/:id" component={Movie}/>
                </div>
            </Router>
        </Provider>
  );
}

export default App;
