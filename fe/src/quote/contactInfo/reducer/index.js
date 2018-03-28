import * as actions from './actions';
import * as types from './actionTypes';



const initialState = {
  email: "",
  zipcode: 10000,
}

export default function(state = initialState, action) {

    switch(action.type) {

        case types.ASSIGN_EMAIL :
            return { ...state, email: action.payload }

        case types.ASSIGN_ZIP :
            return { ...state, zipcode: action.payload }

        default :
          return state;
          
    }

}
