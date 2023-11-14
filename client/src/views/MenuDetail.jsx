import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchMenuDetail } from "../store/actions/actionCreators";
import { Loader } from "../components/Loader";
import { NotFound } from "./NotFound"
export const DetailMenu = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { menuDetails } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMenuDetail(id)).finally(() => setLoading(false)).catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      })
    }, 1500);
  }, [id]);
  const ingredientNames = menuDetails?.Ingredients?.map((ingredient) => ingredient.name);
  return (
    <>
      <div style={{ paddingTop: "2vh", paddingBottom: "5vh", marginLeft: "8vh" }}>
        <Link to={"/menu"} style={{ textDecoration: 'none'}}>
          <h1 style={{ color: "brown" }}>BACK TO MENU</h1>
        </Link>
      </div>
      {!loading ? (
        !menuDetails ? (
          <NotFound />
        ) :
        <section className="menu-detail-container" style={{ paddingBottom: "5vh" }}>
          <img className="menu-detail-image" src={menuDetails.imgUrl} alt="Spaghetti Carbonara" />
          <div className="menu-detail-details">
            <h1 className="menu-detail-title">{menuDetails.name}</h1>
            <h3 style={{ fontSize: "14px" }}>Price:</h3>
            <p className="menu-detail-price" style={{ paddingBottom: "2vh" }}>
              ${menuDetails.price}
            </p>
            <p className="menu-detail-description text-break">{menuDetails.description}</p>
            <h3 style={{ fontSize: "3vh" }}>Ingredients:</h3>
            <p className="menu-detail-description text-break">{ingredientNames?.join(", ")}</p>
            <h3 style={{ fontSize: "3vh", display: "flex" }}>
              Created By: <p style={{ paddingLeft: "5px" }}>{menuDetails.User.username}</p>
            </h3>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};
