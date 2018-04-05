import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

const initialState = {
    email: '',
    zipCode: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.UPDATE_EMAIL : {
            return {
                ...state,
                email : action.payload
            }
        };


        default : { return state; }
    }
}
