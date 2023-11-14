import {
  MENU_DETAILS_FETCH_SUCCESS,
  CATEGORY_BY_ID,
  ADD_MENU,
  MENUS_FETCH_SUCCESS,
  MENU_CATEGORY_FETCH_SUCCESS,
  ADMIN_FETCH_SUCCESS,
} from "./actionTypes";

export const menusFetchSuccess = (payload) => {
  return { type: MENUS_FETCH_SUCCESS, payload };
};

export const detailMenuFetchSuccess = (payload) => {
  return { type: MENU_DETAILS_FETCH_SUCCESS, payload };
};

export const categoriesFetchSuccess = (payload) => {
  return { type: MENU_CATEGORY_FETCH_SUCCESS, payload };
};

export const addMenuSuccess = (payload) => {
  return { type: ADD_MENU, payload };
};
export const fetchCategoryByIdSuccess = (payload) => {
  return { type: CATEGORY_BY_ID, payload };
};
export const adminFetchSuccess = (payload) => {
  return { type: ADMIN_FETCH_SUCCESS, payload };
};
const url = "http://localhost:3000";
// const url = "https://olive-garden.flixy.online";

export const fetchMenus = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/dataMenus", {
        headers: { access_token: localStorage.access_token },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(menusFetchSuccess(resData));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
    }
  };
};
export const fetchMenuDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/detailMenu/" + id, {
        headers: { access_token: localStorage.access_token },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      console.log(resData);
      dispatch(detailMenuFetchSuccess(resData));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
};
export const addMenu = (menu) => {
  return async () => {
    try {
      const response = await fetch(url + "/menus", {
        method: "POST",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
        body: JSON.stringify(menu),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const editMenu = ({ menu, id }) => {
  return async () => {
    try {
      const response = await fetch(url + "/menus/" + id, {
        method: "PUT",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
        body: JSON.stringify(menu),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/categories", {
        headers: { access_token: localStorage.access_token },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(categoriesFetchSuccess(resData));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
    }
  };
};
export const fetchCategoryById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/categoryById/" + id, {
        headers: { access_token: localStorage.access_token },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(fetchCategoryByIdSuccess(resData));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
};
export const editCategory = ({ categoryData, id }) => {
  return async () => {
    console.log("masuk");
    try {
      const response = await fetch(url + "/categories/" + id, {
        method: "PUT",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryData }),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const addCategory = (categoryData) => {
  return async () => {
    try {
      const response = await fetch(url + "/categories", {
        method: "POST",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryData }),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const handleLogin = ({ email, password }) => {
  return async () => {
    try {
      const response = await fetch(url + "/login", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        method: "post",
      });
      const result = await response.json();
      if (!response.ok) {
        throw result;
      }
      localStorage.setItem("access_token", result.access_token);
      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      }, 1500);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
};

export const fetchAdmins = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(url + "/admins", {
        headers: { access_token: localStorage.access_token },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      dispatch(adminFetchSuccess(resData));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
    }
  };
};
export const addAdmin = (input) => {
  return async () => {
    try {
      const response = await fetch(url + "/addAdmin", {
        method: "POST",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const deleteMenu = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url + "/menus/" + id, {
        method: "DELETE",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      const filteredMenu = getState().menuReducer.menus.filter((el) => el.id !== id);
      dispatch(menusFetchSuccess(filteredMenu));
      return resData;
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      throw error;
    }
  };
};
export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url + "/categories/" + id, {
        method: "DELETE",
        headers: { access_token: localStorage.access_token, "Content-Type": "application/json" },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      const filteredCategories = getState().categoryReducer.categories.filter((el) => el.id !== id);
      dispatch(categoriesFetchSuccess(filteredCategories));
      return resData;
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      throw error;
    }
  };
};
