import * as actions from '../actions';

const initialState = {
  email: "",
  zipcode: 0,
}


export default function(state = initialState, action) {

    switch(action.type) {
        case actions.GO_TO_VEHICLE_INFO : {
            return {
                ...state
                ,contact : action.payload
            };
        }

        default : { return state; }
    }
}
