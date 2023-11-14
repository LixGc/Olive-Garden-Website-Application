import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCategory, editCategory, fetchCategoryById } from "../store/actions/actionCreators";

export const CategoryForm = () => {
  const { category } = useSelector((state) => state.categoryReducer);
  const [categoryData, setCategoryData] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryById(id));
    }
  }, [id]);

  useEffect(() => {
    if (category && id) {
      setCategoryData(category.name);
    } else {
      setCategoryData("");
    }
  }, [category]);

  const handleBack = (e) => {
    navigate('/categories')
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(editCategory({ categoryData, id }))
            .then(() => {
              navigate("/categories");
              setTimeout(() => {
                Swal.fire("Success!", "Your category has been successfully edited!", "success");
              }, 1500);
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message + "!",
              });
            });
        }
      });
    } else {
      dispatch(addCategory(categoryData))
        .then(() => {
          navigate("/categories");
          setTimeout(() => {
            Swal.fire("Success!", "Category added successfully!", "success");
          }, 1500);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message + "!",
          });
        });
    }
  };
  return (
    <>
      <section style={{ paddingTop: "5vh", paddingBottom: "20vh", width: "500px", marginLeft: "14%" }}>
        <div id="add-product-section" className="d-flex justify-content-center align-items-center bg-light">
          <div className="w-100 p-4 p-md-5 shadow-lg bg-white rounded">
            <h2 className="text-center mb-4">{id ? "Edit" : "Add"} Category</h2>
            <form onSubmit={handleSubmit} id="add-product-form">
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="category"
                  onChange={(el) => setCategoryData(el.target.value)}
                  value={categoryData}
                  className="form-control"
                  id="category"
                  name="category"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button onClick={handleBack} type="button" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
