import React, {
  Fragment,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { connect } from "react-redux";
import IInvoice from "./data/InvoiceData";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import FileBase64 from 'react-file-base64';
import { getInvoice, addTable } from "../actions/invoiceActions";
import { bindActionCreators, Dispatch } from "redux";


interface IProps {
  errorMessage: string;
  items: any;
  getInvoice: any;
  addTable: any;
}

interface IRows {
  Item: string;
  Quantity: number;
  Rate: 0;
  Amount: 0;
}

const Content = ({ getInvoice, addTable, items }: IProps) => {
  const [rows, setRows] = useState<IRows[] | any>([
    {
      Item: "",
      Quantity: 1,
      Rate: 0,
      Amount: 0,
    },
  ]);

  const [data, setData] = useState<IInvoice | any>({
    id: 1,
    to: "",
    to_title: "Bill To",
    ship_to: "",
    ship_to_title: "Ship To",
    date: new Date("yyyy, MM, dd"),
    date_title: "Date",
    due_date: new Date("year, monthIndex, day"),
    due_date_title: "Due Date",
    from: "",
    header: "INVOICE",
    invoice_number_title: "#",
    payment_terms_title: "Payment Terms",
    payment_terms: "",
    purchase_order_title: "PO Number",
    purchase_order: "",
    item: [],
    rows,
    item_header: "Item",
    quantity_header: "Quantity",
    unit_cost_header: "Rate",
    amount_header: "Amount",
    notes: "",
    notes_title: "Notes",
    terms: "",
    terms_title: "Title",
    subtotal: 0,
    subtotal_title: "Subtotal",
    tax: 0,
    tax_title: "Tax",
    discounts: 0,
    discounts_title: "Discount",
    shipping: 0,
    shipping_title: "Shipping",
    total: 0,
    total_title: "Total",
    amount_paid: 0,
    amount_paid_title: "Amount Paid",
    balance: 0,
    balance_title: "Balance Due",
    Quantity: 1,
    Rate: 0.1,
    tax_select: 'flat'
  });

  const addRow = () => {
    const newRowDate = { Item: "", Quantity: 1, Rate: 0, Amount: 0 };
    setRows(rows.concat(newRowDate));
    addTable(ship_to, balance, amount_paid, total);
  };

  const {
    id,
    from,
    to,
    to_title,
    Item,
    Quantity,
    Rate,
    Amount,
    ship_to,
    ship_to_title,
    date,
    date_title,
    due_date,
    due_date_title,
    header,
    payment_terms,
    payment_terms_title,
    purchase_order_title,
    purchase_order,
    item_header,
    quantity_header,
    unit_cost_header,
    amount_header,
    notes,
    notes_title,
    terms,
    terms_title,
    subtotal,
    subtotal_title,
    tax,
    tax_title,
    discounts,
    discounts_title,
    shipping,
    shipping_title,
    total,
    total_title,
    amount_paid,
    amount_paid_title,
    balance,
    balance_title,
    tax_select,
  } = data;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onChangeSelectElement = (event: ChangeEvent<HTMLSelectElement>) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.setItem(`ls.invoice-${id}`, JSON.stringify(data));
  };

  useEffect(() => {
    getInvoice(
      data.id,
      data.from,
      data.to,
      data.to_title,
      data.ship_to,
      data.ship_to_title,
      data.header,
      data.date_title,
      data.date,
      data.payment_terms_title,
      data.payment_terms,
      data.due_date_title,
      data.due_date,
      data.purchase_order_title,
      data.purchase_order,
      data.item_header,
      data.quantity_header,
      data.unit_cost_header,
      data.amount_header,
      data.notes_title,
      data.notes,
      data.terms_title,
      data.terms,
      data.subtotal_title,
      data.tax_title,
      data.total_title,
      data.amount_paid_title,
      data.balance_title,
      data.Item,
      data.Amount,
      data.Quantity,
      data.Rate,
      data.amount_paid,
      data.tax_select
    );
  }, [
    getInvoice,
    data.id,
    data.from,
    data.to,
    data.to_title,
    data.ship_to,
    data.ship_to_title,
    data.header,
    data.date_title,
    data.date,
    data.payment_terms_title,
    data.payment_terms,
    data.due_date_title,
    data.due_date,
    data.purchase_order_title,
    data.purchase_order,
    data.item_header,
    data.quantity_header,
    data.unit_cost_header,
    data.amount_header,
    data.notes_title,
    data.notes,
    data.terms_title,
    data.terms,
    data.subtotal_title,
    data.tax_title,
    data.total_title,
    data.amount_paid_title,
    data.balance_title,
    data.Item,
    data.Amount,
    data.Quantity,
    data.Rate,
    data.amount_paid,
    data.tax_select
  ]);

  const [price, setPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [balanceTotalPrice, setBalanceTotalPrice] = useState(0);

  useEffect(() => {
    const rate = data.Rate;
    const quantityPrice = data.Quantity;
    setPrice(rate * quantityPrice);
  }, [price, data.Rate, data.Quantity]);

  useEffect(() => {
    const taxRate = 20;
    const taxesPrice = (price * taxRate) / 100 + price;
    setTaxPrice(taxesPrice);
  }, [taxPrice, price]);

  useEffect(() => {
    const amountPaidPrice = data.amount_paid;
    const taxesTotalPrice = taxPrice - amountPaidPrice;
    setBalanceTotalPrice(taxesTotalPrice);
  }, [balanceTotalPrice, taxPrice, price]);

  const [file, setFile] = useState<any>("");

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="content">
              <div className="row">
                <div className="col-md-7">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="billDetailsArea">
                          <form className="billDetails" onSubmit={onSubmit}>
                            {/* <label
                              htmlFor="fileInput"
                              className="btn mb-4"
                              id="fileButton"
                            >
                              <i className="fas fa-plus" aria-hidden="true"></i>
                              Add your logo */}
                              
                            {/* <input type="file" id="fileInput" name="img" onChange={onChange} defaultValue={img} /> */}
                            {/* </label> */}
                            <div className="mb-4">
                            <FileBase64
                              multiple={false}
                              onDone={({base64}:any) => setFile(base64)}
                              />
                            </div>
                            
                            <textarea
                              className="form-control shadow-none"
                              id="invoice"
                              placeholder="Who is this invoice from? (required)"
                              name="from"
                              onChange={onChangeTextArea}
                              defaultValue={from}
                              required
                            ></textarea>
                            <div className="billArea">
                              <div className="billAreaInputs">
                                <input
                                  className="form-control shadow-none bill"
                                  type="text"
                                  name="to_title"
                                  onChange={onChange}
                                  defaultValue={to_title}
                                />
                                <textarea
                                  className="form-control shadow-none billTextArea"
                                  placeholder="Bill To (required)"
                                  name="to"
                                  onChange={onChangeTextArea}
                                  defaultValue={to}
                                  required
                                ></textarea>
                              </div>
                              <div className="shipAreaInputs">
                                <input
                                  className="form-control shadow-none ship"
                                  type="text"
                                  name="ship_to_title"
                                  onChange={onChange}
                                  defaultValue={ship_to_title}
                                />
                                <textarea
                                  className="form-control shadow-none shiptTextArea"
                                  placeholder="Ship To"
                                  name="ship_to"
                                  onChange={onChangeTextArea}
                                  defaultValue={ship_to}
                                ></textarea>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="shipDetailsArea">
                    <form onSubmit={onSubmit}>
                      <input
                        className="form-control shadow-none companyName"
                        type="text"
                        name="header"
                        onChange={onChange}
                        defaultValue={header}
                      />
                      <div className="generate">
                        <div className="input-group mb-3 generateNumberArea">
                          <span className="input-group-text" id="basic-addon1">
                            #
                          </span>
                          <input
                            type="number"
                            className="form-control shadow-none generateNumber"
                            name="id"
                            onChange={onChange}
                            defaultValue={id}
                          />
                        </div>
                      </div>

                      <div className="dateArea">
                        <input
                          className="form-control shadow-none dateText"
                          type="text"
                          name="date_title"
                          onChange={onChange}
                          defaultValue={date_title}
                        />
                        <input
                          className="form-control shadow-none dateTime"
                          type="date"
                          name="date"
                          onChange={onChange}
                          defaultValue={date}
                        />
                      </div>
                      <div className="payment">
                        <input
                          className="form-control shadow-none paymentText"
                          type="text"
                          name="payment_terms_title"
                          onChange={onChange}
                          defaultValue={payment_terms_title}
                        />
                        <input
                          className="form-control shadow-none paymentTerms"
                          type="text"
                          name="payment_terms"
                          onChange={onChange}
                          defaultValue={payment_terms}
                        />
                      </div>
                      <div className="dueDateArea">
                        <input
                          className="form-control shadow-none dueDateText"
                          type="text"
                          name="due_date_title"
                          onChange={onChange}
                          defaultValue={due_date_title}
                        />
                        <input
                          className="form-control shadow-none dueDateTime"
                          type="date"
                          name="due_date"
                          onChange={onChange}
                          defaultValue={due_date}
                        />
                      </div>
                      <div className="poNumber">
                        <input
                          className="form-control shadow-none poNumberText"
                          type="text"
                          name="purchase_order_title"
                          onChange={onChange}
                          defaultValue={purchase_order_title}
                        />
                        <input
                          className="form-control shadow-none poNumberInput"
                          type="text"
                          name="purchase_order"
                          onChange={onChange}
                          defaultValue={purchase_order}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input
                                  className="form-control shadow-none item"
                                  type="text"
                                  name="item_header"
                                  onChange={onChange}
                                  defaultValue={item_header}
                                />
                              </th>
                              <th scope="col">
                                <input
                                  className="form-control shadow-none quantity"
                                  type="text"
                                  name="quantity_header"
                                  onChange={onChange}
                                  defaultValue={quantity_header}
                                />
                              </th>
                              <th scope="col">
                                <input
                                  className="form-control shadow-none rate"
                                  type="text"
                                  name="unit_cost_header"
                                  onChange={onChange}
                                  defaultValue={unit_cost_header}
                                />
                              </th>
                              <th scope="col">
                                <input
                                  className="form-control shadow-none amaount"
                                  type="text"
                                  name="amount_header"
                                  onChange={onChange}
                                  defaultValue={amount_header}
                                />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr>
                                <td>
                                  <input
                                    className="form-control shadow-none itemTbody"
                                    type="text"
                                    placeholder="Description of service or product..."
                                    name="Item"
                                    onChange={onChange}
                                    defaultValue={data.Item}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="form-control shadow-none quantityTbody"
                                    type="number"
                                    name="Quantity"
                                    onChange={onChange}
                                    defaultValue={data.Quantity}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="form-control shadow-none rateTbody"
                                    type="number"
                                    name="Rate"
                                    onChange={onChange}
                                    step="00.1"
                                    defaultValue={data.Rate}
                                  />
                                </td>
                                <td>
                                  <p style={{ textAlign: "right" }}>
                                    {price.toFixed(2)}
                                  </p>
                                </td>
                              </tr>
                          </tbody>
                        </table>
                        {/* <button
                          className="btn btn-primary mb-4"
                          id="okButton"
                          onClick={() => addRow()}
                        >
                          <i className="fas fa-plus"></i>Line Item
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="notesArea">
                      <input
                        className="form-control shadow-none notesText"
                        type="text"
                        name="notes_title"
                        onChange={onChange}
                        defaultValue={notes_title}
                      />
                      <textarea
                        className="form-control shadow-none notesTextArea"
                        placeholder="Notes - any relevant information not already covered"
                        name="notes"
                        onChange={onChangeTextArea}
                        defaultValue={notes}
                      ></textarea>
                    </div>
                    <div className="termsArea">
                      <input
                        className="form-control shadow-none termsText"
                        type="text"
                        name="terms_title"
                        onChange={onChange}
                        defaultValue={terms_title}
                      />
                      <textarea
                        className="form-control shadow-none termsTeaxtArea"
                        placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                        name="terms"
                        onChange={onChangeTextArea}
                        defaultValue={terms}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="subTotalArea">
                      <input
                        className="form-control shadow-none subTotalInput"
                        type="text"
                        name="subtotal_title"
                        onChange={onChange}
                        defaultValue={subtotal_title}
                      />
                      <p>&#x20BA; {price.toFixed(2)}</p>
                    </div>
                    <div className="taxArea">
                      <div className="taxAreaInputs">
                        <input
                          className="form-control shadow-none taxInput"
                          type="text"
                          onChange={onChange}
                          defaultValue={tax_title}
                        />
                        <div className="form-group">
                          <select className="form-control shadow-none" name="tax_select" onChange={onChangeSelectElement} defaultValue={tax_select} >
                            <option defaultValue="flat">Flat</option>
                            <option defaultValue="percent">Percent</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="taxButtons">
                        <p>
                          <i className="fas fa-plus"></i> {discounts_title}
                        </p>
                        <p>
                          <i className="fas fa-plus"></i> {shipping_title}
                        </p>
                      </div> */}
                    </div>
                    <div className="totalArea">
                      <input
                        className="form-control shadow-none totalInput"
                        type="text"
                        name="total_title"
                        onChange={onChange}
                        defaultValue={total_title}
                      />
                      <p>&#x20BA; {taxPrice.toFixed(2)}</p>
                    </div>
                    <div className="amountPaidArea">
                      <input
                        className="form-control shadow-none amountPaidInput"
                        type="text"
                        name="amount_paid_title"
                        onChange={onChange}
                        defaultValue={amount_paid_title}
                      />
                      <input
                        className="form-control shadow-none amountPaidInputTotal"
                        type="text"
                        name="amount_paid"
                        onChange={onChange}
                        defaultValue={amount_paid}
                      />
                    </div>
                    <div className="balanceDueArea">
                      <input
                        className="form-control shadow-none balanceDueInput"
                        type="text"
                        name="balance_title"
                        onChange={onChange}
                        defaultValue={balance_title}
                      />
                      <p>&#x20BA; {balanceTotalPrice.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <Sidebar
            data={data}
            price={price.toFixed(2)}
            taxPrice={taxPrice.toFixed(2)}
            balanceTotalPrice={balanceTotalPrice.toFixed(2)}
            imgpdf={file}
          />
          {/* Sidebar Area */}

          {/* The Modal */}
          <Modal />
          {/* The Modal */}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  errorMessage: state.invoice.errorMessage,
  items: state.invoice.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getInvoice: bindActionCreators(getInvoice, dispatch),
  addTable: bindActionCreators(addTable, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
