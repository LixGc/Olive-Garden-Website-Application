import { ADMIN_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  admins: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_FETCH_SUCCESS:
      return { ...state, admins: action.payload };
    default:
      return state;
  }
}

export default userReducer;
