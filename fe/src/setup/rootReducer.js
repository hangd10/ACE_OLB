import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import MasterQuoteComponent from
  '../quote/masterQuote/reducer/index.js'

console.log("quote reducer: ", MasterQuoteComponent)

const rootReducer = combineReducers({
    form : formReducer,
    master : MasterQuoteComponent,
});

export default rootReducer;
