import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenu, editMenu, fetchCategory, fetchMenuDetail } from "../store/actions/actionCreators";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../../client/src/components/Loader";
export const MenuForm = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { detailMenu } = useSelector((state) => state.menuReducer);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [menu, setMenu] = useState({
    name: "",
    price: "",
    CategoryId: "",
    ingredientName: "",
    imgUrl: "",
    description: "",
  });
  useEffect(() => {
    if (id) {
      dispatch(fetchMenuDetail(id));
    }
  }, [id]);

  useEffect(() => {
    if (detailMenu && id) {
      setMenu({
        ...menu,
        name: detailMenu.name,
        price: detailMenu.price,
        CategoryId: detailMenu.CategoryId,
        ingredientName: detailMenu.Ingredients.map((ingredient) => ingredient.name).join(", "),
        imgUrl: detailMenu.imgUrl,
        description: detailMenu.description,
      });
    } else {
      setMenu("");
    }
  }, [detailMenu]);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (id) {
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Edit!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(editMenu({ menu, id }))
              .then(() => {
                navigate("/");
                setTimeout(() => {
                  Swal.fire("Success!", "Your menu has been edited.", "success");
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
        dispatch(addMenu(menu))
          .then(() => {
            navigate("/");
            setTimeout(() => {
              Swal.fire({
                title: "Sweet!",
                text: `Successfully added ${menu.name}!`,
                imageUrl: menu.imgUrl,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
              });
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
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setMenu({ ...menu, [name]: value });
  };
  return (
    <>
      <section style={{ paddingTop: "5vh", paddingBottom: "20vh", width: "500px", marginLeft: "14%" }}>
        <div id="add-product-section" className="d-flex justify-content-center align-items-center bg-light">
          <div className="w-100 p-4 p-md-5 shadow-lg bg-white rounded">
            <h2 className="text-center mb-4">{id ? "Edit" : "Add"} Menu</h2>
            <form id="add-product-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input onChange={handleChange} value={menu.name} type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input onChange={handleChange} value={menu.price} type="number" className="form-control" id="price" name="price" required />
              </div>
              <div className="mb-3">
                <label htmlFor="categoryId" className="form-label">
                  Category
                </label>
                <select onChange={handleChange} className="form-select" id="CategoryId" value={menu.CategoryId} name="CategoryId" required>
                  <option value="" disabled>
                    ---Select Category---
                  </option>
                  {categories.map((el, index) => {
                    return (
                      <option key={index} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
                {!id && (
                    <div className="mb-3">
                  <label htmlFor="ingredient" className="form-label">
                    Ingredient
                  </label>
                <input
                  onChange={handleChange}
                  value={menu.ingredientName}
                  type="ingredientName"
                  className="form-control"
                  id="ingredientName"
                  name="ingredientName"
                  required
                />
              </div>
                )}
              <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label">
                  Image Url
                </label>
                <input onChange={handleChange} value={menu.imgUrl} type="text" className="form-control" id="imgUrl" name="imgUrl" required />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  value={menu.description}
                  className="form-control"
                  id="description"
                  name="description"
                  cols="55"
                  rows="4"
                  required></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary me-2">
                  {id ? "Edit" : "Add"} Menu
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
