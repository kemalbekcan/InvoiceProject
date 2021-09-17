interface IInvoice {
    id: number,
    to: string
    to_title: string,
    ship_to: string,
    ship_to_title: string,
    date: any,
    date_title: string,
    due_date: any,
    due_date_title: string,
    from: string,
    header: string,
    invoice_number_title: string,
    payment_terms_title: string,
    payment_terms: string,
    purchase_order_title: string,
    purchase_order: string,
    item: [] | any,
    Item: string;
    Quantity: number;
    Rate: number;
    Amount: number;
    item_header: string,
    quantity_header: string,
    unit_cost_header: string,
    amount_header: string,
    notes: string,
    notes_title: string,
    terms: string,
    terms_title: string,
    subtotal: number,
    subtotal_title: string,
    tax: number,
    tax_title: string,
    discounts: number,
    discounts_title: string,
    shipping: number,
    shipping_title: string,
    total: number,
    total_title: string,
    amount_paid: number,
    amount_paid_title: string,
    balance: number,
    balance_title: string,
    tax_select: string,
    img: string
  }

export default IInvoice