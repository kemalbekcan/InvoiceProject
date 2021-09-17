import { IIAnnouncement } from './state';
import { SUCCESS_INVOICE, UPDATE_INVOICE, ERROR_INVOICE, TABLE_SUCCESS } from '../actions/types';

const initialState: IIAnnouncement = {
    loading: true,
    invoices: [],
    items: [],
    errorMessage: null,
    successMessage: null
}

interface successInvoice {
    type: typeof SUCCESS_INVOICE,
    payload: string
}

interface updateInvoice {
    type: typeof UPDATE_INVOICE,
    payload: string
}

interface errorInvoice {
    type: typeof ERROR_INVOICE,
    payload: string
}

interface addedTable {
    type: typeof TABLE_SUCCESS,
    payload: string
}

export type invoiceActions = successInvoice | updateInvoice | errorInvoice | addedTable

const invoiceReducer = (state:IIAnnouncement = initialState, action: invoiceActions) => {
    switch(action.type){
        case SUCCESS_INVOICE:
            return {
                ...state,
                loading: false,
                invoices: [...state.invoices, action.payload],
                successMessage: 'Invoice data added !'
            }
        case TABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: 'Success !',
                items: [...state.items, action.payload]
            }
        case ERROR_INVOICE:
            return{
                ...state,
                loading: false,
                errorMessage: 'Something went wrong !'
            }
        default: return state
    }
}

export default invoiceReducer