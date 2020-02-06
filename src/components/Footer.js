import React from "react";
function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Created By:
            <span className="text-warning font-weight-normal">
              Lutaaya Huzaifah Idris
            </span>
            <a
              href="https://api.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer