import { useDispatch, useSelector } from "react-redux";
import { CategoryRow } from "../components/CategoryRow";
import { useEffect, useState } from "react";
import { fetchCategory } from "../store/actions/actionCreators";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
export const Category = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategory());
      setLoading(false);
    }, 1500);
  }, []);

  function navigateToAddCategoryForm(e) {
    e.preventDefault();
    navigate("/CategoryFormAdd");
  }
  return (
    <section className="w-100">
      <h1 style={{ textAlign: "center", paddingRight: "150px" }}>Categories</h1>
      <button onClick={navigateToAddCategoryForm} style={{ marginLeft: "80%" }} className="btn btn-primary btn-sm rounded-pill">
        + New Category
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th scope="col">Delete</th>
            <th scope="col">&#9998;Edit</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            categories.map((el, idx) => {
              return <CategoryRow category={el} key={idx} idx={idx} />;
            })
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </section>
  );
};
