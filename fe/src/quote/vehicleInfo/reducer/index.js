import * as actions from '../actions';

export default function(state = { }, action) {
    //console.log(`Vehicle Info Reducer Action ${ JSON.stringify(action) } state ${ JSON.stringify(state) }`);

    switch(action.type) {
        case actions.GO_TO_ADD_DRIVER_INFO : {
            return {
                ...state
                ,"vehicleInfo" : action.payload
            }
        }

        default : { return state; }
    }
}