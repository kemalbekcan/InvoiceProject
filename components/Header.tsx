import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="headerLogo">
                <a href="#" className="textLogo">
                  Generator
                </a>
              </div>
            </div>
            <div className="col-md-10">
              <nav>
                <ul className="menuLink">
                  <li className="menuItem">
                    <a href="#" className="menuLink active">
                      Learn More
                    </a>
                  </li>
                  {/* <li className="menuItem">
                    <a href="#" className="menuLink">
                      Invoicing Guide
                    </a>
                  </li> */}
                  <li>
                    {/* <button className="btn btn-primary" id="upgradeButton">
                      Upgrade
                    </button> */}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
