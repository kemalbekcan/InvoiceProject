import { combineReducers } from 'redux';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
    invoice: invoiceReducer
})

export default rootReducer