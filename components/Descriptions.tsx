import React, { Fragment } from "react";

const Descriptions = () => {
  return (
    <Fragment>
      <div className="description">
        <div className="container">
          <div className="row">
            <div className="col-md-12 descriptionContent">
              <h1 className="learnMore">Free Invoice Template</h1>
              <h2 className="descContent">
                Make beautiful invoices with one click!
              </h2>
              <p>
                Welcome to the original Invoice Generator, trusted by millions
                of people. Invoice Generator lets you quickly make invoices with
                our attractive invoice template straight from your web browser,
                no sign up necessary. The invoices you make can be sent and paid
                online or downloaded as a PDF.
              </p>
              <p>
                Did we also mention that Invoice Generator lets you generate an
                unlimited number of invoices?
              </p>
              <button className="btn btn-primary" id="okButton">
                OK, got it!
              </button>
              {/* <a href="#" className="readDocs">
                Read the Docs
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Descriptions;
