import { CATEGORY_BY_ID, MENU_CATEGORY_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  categories: [],
  category: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_CATEGORY_FETCH_SUCCESS:
      return { ...state, categories: action.payload };
    case CATEGORY_BY_ID:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;
