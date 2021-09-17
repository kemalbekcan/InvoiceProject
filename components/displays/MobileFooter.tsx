import React, { Fragment } from "react";

const MobileFooter = () => {
  return (
    <Fragment>
      {/* Mobile Footer Area */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobileFooter">
              <div className="usdButtonArea">
                <button className="btn shadow-none usdButton">
                  Currency: <strong>USD</strong>
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </div>
              <div className="saveTemplateArea">
                <button className="btn shadow-none saveTemplate">
                  Save Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Footer Area */}
    </Fragment>
  );
};

export default MobileFooter;
