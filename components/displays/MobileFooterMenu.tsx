import React, { Fragment } from "react";

const MobileFooterMenu = () => {
  return (
    <Fragment>
      {/* Footer Menu Area Mobile */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footerMenu">
              <nav className="footerMenuNavbar">
                <ul className="footerMenuList">
                  <li>
                    <div className="myInvoices">
                      <button className="btn shadow-none">My Invoices</button>
                    </div>
                  </li>
                  <li>
                    <div className="donloadsButtonsArea">
                      <button className="btn shadow-none">Download</button>
                      <button className="btn shadow-none">Send</button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Menu Area Mobile */}
    </Fragment>
  );
};

export default MobileFooterMenu;
