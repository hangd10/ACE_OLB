import * as actions from '../actions';
import * as types from '../actionTypes';

/**
The structure of the masterQuote object:
  - GUID [type string] - correclates to quote object in HUON
  - user [type obj] - pre-xsisting AAA membership information [if user's logged on]
  - contactInfo [type obj] - passed in from corntact info component
  - vehicleInfo [type obj] - passed in from vehicle info component
**/

const initialState = {
  quote: {
    GUID: null,
    user: {},
    contactInfo: {},
    vehicleInfo: {},
  },
  formStage: 0,
}

export default function(state = initialState, action) {

    switch(action.type) {
        case types.ADD_TODO : {
            return Object.assign( {}, state,
              { formStage : action.payload }
            )
        }
        default :
          return state;
    }

}
