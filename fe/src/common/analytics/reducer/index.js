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
  language: "en",
  geoLocation: {},
}

export default function(state = initialState, action) {

    switch(action.type) {
        case types.UPDATE_LANG :
            return { ...state, language: action.payload }
        default :
          return state;
    }

}
