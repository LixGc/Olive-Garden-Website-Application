import { MENUS_FETCH_SUCCESS, MENU_DETAILS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  menus: [],
  detailMenu: null,
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENUS_FETCH_SUCCESS:
      return { ...state, menus: action.payload };
    case MENU_DETAILS_FETCH_SUCCESS:
      return { ...state, detailMenu: action.payload };
    default:
      return state;
  }
}

export default menuReducer;
