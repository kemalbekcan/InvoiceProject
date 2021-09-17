import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr />
              <nav className="footerNavbar">
                {/* <ul className="footerList">
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      Invoice Template
                    </a>
                  </li>
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      Help
                    </a>
                  </li>
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      Invoicing Guide
                    </a>
                  </li>
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      Upgrade
                    </a>
                  </li>
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      API
                    </a>
                  </li>
                  <li className="footerItem">
                    <a className="footerLinks" href="#">
                      Blog
                    </a>
                  </li>
                </ul> */}
              </nav>
              <div className="copyright">
                <h3>MADE BY Kemal Bekcan</h3>
                <p>&copy; 2021 GENERATOR. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
