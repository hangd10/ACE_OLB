import * as actions from '../actions';

export default function(state = { }, action) {
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
