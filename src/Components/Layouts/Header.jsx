import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid  ">
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src="Assests/logo.svg" alt=""  />
          </a>{" "}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              <li className="nav-item mt-3">
                <a className="nav-link headerfontcolor" href="/">
                  <b>Marketplace</b>
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item mt-3">
                <a className="nav-link headerfontcolor" href="/">
                  <b>Drops</b>
                </a>
              </li>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle headerfontcolor mt-3"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Brands</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="/">
                      Philadelphia 76ers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Aston Martin F1
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Lega Serie A
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      DRESSX
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Heavy Metal
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      LA Kings
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Paris Saint-Germain
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      UFC
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Angel City FC
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Crypto.com
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      DeFi The Game
                    </a>
                  </li>
                </ul>
              </li>{" "}
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="header-button header-button2 mt-3"
                  data-test-id="nav-create"
                  href="/"
                  contenteditable="false"
                >
                  Create
                </a>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link headerfontcolor " href="/">
                  <b>Sign In</b>
                </a>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li className="nav-item">
                <a className="nav-link headerfontcolor" href="/">
                  <b>Sign Up</b>
                </a>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link headerfontcolor mt-3" href="/">
                  <b>English</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
