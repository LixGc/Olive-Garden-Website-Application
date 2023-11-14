import { MENUS_FETCH_SUCCESS, MENU_DETAILS_FETCH_SUCCESS, MENU_CATEGORY_FETCH_SUCCESS } from "./actionTypes";

export const menusFetchSuccess = (payload) => {
  return { type: MENUS_FETCH_SUCCESS, payload };
};

export const detailMenuFetchSuccess = (payload) => {
  return { type: MENU_DETAILS_FETCH_SUCCESS, payload };
};

export const categoriesFetchSuccess = (payload) => {
  return { type: MENU_CATEGORY_FETCH_SUCCESS, payload };
};

const url = "http://localhost:3000";
// const url = "https://olive-garden.flixy.online";

export const fetchMenus = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/menus");
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(menusFetchSuccess(resData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMenuDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/menus/" + id);
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(detailMenuFetchSuccess(resData));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/categories");
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(categoriesFetchSuccess(resData));
    } catch (error) {
      console.log(error);
    }
  };
};
