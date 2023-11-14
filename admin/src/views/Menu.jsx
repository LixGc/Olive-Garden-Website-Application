import { useDispatch, useSelector } from "react-redux";
import { MenuRow } from "../components/MenuRow";
import { useEffect, useState } from "react";
import { fetchMenus } from "../store/actions/actionCreators";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
export const Menu = () => {
  const { menus } = useSelector((state) => state.menuReducer);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMenus());
      setLoading(false);
    }, 1500);
  }, []);

  function navigateToAddMenuForm(e) {
    e.preventDefault();
    navigate("/MenuFormAdd");
  }

  return (
    <section className="w-100">
      <h1 style={{ textAlign: "center", paddingRight: "150px" }}>Menus</h1>
      <button onClick={navigateToAddMenuForm} style={{ marginLeft: "80%" }} className="btn btn-primary btn-sm rounded-pill">
        + New Menu
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th style={{ width: "25vh" }} scope="col">
              Ingredient
            </th>
            <th scope="col">Created By</th>
            <th scope="col">Delete</th>
            <th scope="col">&#9998;Edit</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            menus.map((el, index) => {
              return <MenuRow key={index} menu={el} index={index} />;
            })
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </section>
  );
};
