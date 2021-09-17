import React, { Fragment, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Sidebar = ({ data, price, taxPrice, balanceTotalPrice, imgpdf }: any) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16, // or "smart", default is 16
  });

  console.log(data);

  const download = () => {
    if (imgpdf.length === 0) {
      alert("Please add image");
    } else if (data.from.length === 0 || data.to.length === 0) {
      alert("Please add require areas");
    } else {
      autoTable(doc.addImage(imgpdf, "JPG", 10, 10, 50, 50), {
        margin: {
          top: 60,
        },
      });
      autoTable(doc, {
        head: [["from", data.to_title, data.ship_to_title]],
        body: [[data.from, data.to, data.ship_to]],
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          halign: "center",
        },
        bodyStyles: {
          halign: "center",
        },
      });

      autoTable(doc, {
        head: [
          [
            "Header",
            data.date_title,
            data.payment_terms_title,
            data.due_date_title,
            data.purchase_order_title,
          ],
        ],
        body: [
          [
            data.header,
            data.date,
            data.payment_terms,
            data.due_date,
            data.purchase_order,
          ],
        ],
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          halign: "center",
        },
        bodyStyles: {
          halign: "center",
        },
      });

      autoTable(doc, {
        head: [
          [
            data.item_header,
            data.quantity_header,
            data.unit_cost_header,
            data.amount_header,
          ],
        ],
        body: [[data.Item, data.Quantity, data.Rate, price]],
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          halign: "center",
        },
        bodyStyles: {
          halign: "center",
        },
      });

      autoTable(doc, {
        head: [[data.notes_title, data.terms_title]],
        body: [[data.notes, data.terms]],
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          halign: "center",
        },
        bodyStyles: {
          halign: "center",
        },
      });

      autoTable(doc, {
        head: [
          [
            data.subtotal_title,
            data.tax_title,
            data.total_title,
            data.amount_paid_title,
            data.balance_title,
          ],
        ],
        body: [
          [
            price,
            data.taxt_select,
            taxPrice,
            data.amount_paid,
            balanceTotalPrice,
          ],
        ],
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          halign: "center",
        },
        bodyStyles: {
          halign: "center",
        },
      });
      doc.save();

      window.localStorage.setItem("dataInvoice", JSON.stringify(data));
    }
  };


  return (
    <Fragment>
      <div className="col-md-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sidebar">
                <div className="sidebarArea">
                  {/* <button
                    className="btn btn-primary mb-4"
                    id="sendInvoiceButton"
                  >
                    Send Invoice
                  </button> */}
                  <button
                    className="btn btn-primary mb-4"
                    id="downloadPDFButton"
                    onClick={download}
                  >
                    Download PDF
                  </button>
                  {/* <button className="btn shadow-none downloadEInvoice">
                    Download e-Invoice
                  </button> */}
                  <button
                    className="btn shadow-none usdButton"
                    type="button"
                    id="currencyButton"
                    style={{ display: "none" }}
                  >
                    Currency: <strong>USD</strong>
                    <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                  </button>
                  {/* <button className="btn shadow-none saveTemplate">
                    Save Template
                  </button> */}
                  <hr />
                  <div className="myInvoices" style={{ display: "none" }}>
                    <button className="btn shadow-none">My Invoices</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
