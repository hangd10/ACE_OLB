import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactReducer from '../quote/contactInfo/reducer';
import VehicleReducer from '../quote/vehicleInfo/reducer';

import MasterQuoteComponent from
  '../quote/masterQuote/reducer/index.js'

console.log("quote reducer: ", MasterQuoteComponent)

const rootReducer = combineReducers({
    contact : ContactReducer
    // ,vehicle : VehicleReducer
    ,form : formReducer
    form : formReducer,
    master : MasterQuoteComponent,
});

export default rootReducer;
