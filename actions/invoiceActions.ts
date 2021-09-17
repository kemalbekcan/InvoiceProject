import { SUCCESS_INVOICE, UPDATE_INVOICE, ERROR_INVOICE, TABLE_SUCCESS } from "./types";
import { Dispatch } from "redux";

export interface IIinvoiceData {
    id: number,
    from: string,
    to: string,
    to_title: string,
    ship_to: string,
    ship_to_title: string,
    header: string,
    date_title: string,
    date: Date,
    payment_terms_title: string,
    payment_terms: string,
    due_date_title: string,
    due_date: Date,
    purchase_order_title: string,
    purchase_order: string,
    item_header: string,
    quantity_header: string,
    unit_cost_header: string,
    amount_header: string,
    notes_title: string,
    notes: string,
    terms_title: string,
    terms: string,
    subtotal_title: string,
    tax_title: string,
    total_title: string,
    amount_paid_title: string,
    balance_title: string,
    Item: string,
    Amount: number,
    Quantity: number,
    Rate: number,
    amount_paid: number,
    tax_select: string
}

export const getInvoice =
    (
        id: IIinvoiceData,
        from: IIinvoiceData,
        to: IIinvoiceData,
        to_title: IIinvoiceData,
        ship_to: IIinvoiceData,
        ship_to_title: IIinvoiceData,
        header: IIinvoiceData,
        date_title: IIinvoiceData,
        date: IIinvoiceData,
        payment_terms_title: IIinvoiceData,
        payment_terms: IIinvoiceData,
        due_date_title: IIinvoiceData,
        due_date: IIinvoiceData,
        purchase_order_title: IIinvoiceData,
        purchase_order: IIinvoiceData,
        item_header: IIinvoiceData,
        quantity_header: IIinvoiceData,
        unit_cost_header: IIinvoiceData,
        amount_header: IIinvoiceData,
        notes_title: IIinvoiceData,
        notes: IIinvoiceData,
        terms_title: IIinvoiceData,
        terms: IIinvoiceData,
        subtotal_title: IIinvoiceData,
        tax_title: IIinvoiceData,
        total_title: IIinvoiceData,
        amount_paid_title: IIinvoiceData,
        balance_title: IIinvoiceData,
        Item: IIinvoiceData,
        Amount: IIinvoiceData,
        Quantity: IIinvoiceData,
        Rate: IIinvoiceData,
        amount_paid: IIinvoiceData,
        tax_select: IIinvoiceData
    ) =>
        (dispatch: Dispatch) => {
            const invoiceData = {
                id: id,
                from: from,
                to: to,
                to_title: to_title,
                ship_to: ship_to,
                ship_to_title: ship_to_title,
                header: header,
                date_title: date_title,
                date: date,
                payment_terms_title: payment_terms_title,
                payment_terms: payment_terms,
                due_date_title: due_date_title,
                due_date: due_date,
                purchase_order_title: purchase_order_title,
                purchase_order: purchase_order,
                item_header: item_header,
                quantity_header: quantity_header,
                unit_cost_header: unit_cost_header,
                amount_header: amount_header,
                notes_title: notes_title,
                notes: notes,
                terms_title: terms_title,
                terms: terms,
                subtotal_title: subtotal_title,
                tax_title: tax_title,
                total_title: total_title,
                amount_paid_title: amount_paid_title,
                balance_title: balance_title,
                Item: Item,
                Amount: Amount,
                Quantity: Quantity,
                Rate: Rate,
                amount_paid: amount_paid,
                tax_select: tax_select
            };
            try {
                dispatch({ type: SUCCESS_INVOICE, payload: invoiceData });
            } catch (err) {
                dispatch({ type: ERROR_INVOICE, payload: err });
            }
        };

        export interface IItable {
            Item: string,
            Quantity: number,
            Rate: number,
            Amount: number
        }

export const addTable = (Item: IItable, Quantity: IItable, Rate: IItable, Amount :IItable) => (dispatch: Dispatch) => {
    const tablesArea = {
        'Item': Item,
        'Quantiy': Quantity,
        'Rate': Rate,
        'Amount': Amount
    }
    try {
        dispatch({type: TABLE_SUCCESS, payload: tablesArea})
    } catch (err) {
        console.log(err)
    }
}