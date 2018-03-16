import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactReducer from '../quote/contactInfo/reducer';
import VehicleReducer from '../quote/vehicleInfo/reducer';

const rootReducer = combineReducers({
    contact : ContactReducer
    // ,vehicle : VehicleReducer
    ,form : formReducer
});

export default rootReducer;
