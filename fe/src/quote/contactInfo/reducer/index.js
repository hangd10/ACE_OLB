import * as actions from '../actions';

const initialState = {
    email: '',
    zipCode: ''
}

export default function(state = initialState, action) {
    //console.log(`------------ Contact Info Reducer Action ${ JSON.stringify(action) } state ${ JSON.stringify(state) }`);

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
