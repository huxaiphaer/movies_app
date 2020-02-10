import React from "react";
import "../styles/App.css"

function Navbar() {
    return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
              <span className="navbar-text">MoviesHub</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar