import { Link, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { useState } from "react";
export const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          localStorage.removeItem("access_token");
          navigate("/login");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully logged out!",
            showConfirmButton: false,
            timer: 1500,
          });
        }, 1500);
      }
    });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "200px", borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img
          style={{ height: "50px", width: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olive_Garden_Logo.svg/800px-Olive_Garden_Logo.svg.png"
          alt=""
        />
        <span className="fs-4" style={{ fontFamily: "cursive", marginLeft: "10px", verticalAlign: "bottom" }}>
          Admin Panel
        </span>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to={"/"} className="nav-link">
            <span className="material-symbols-outlined" style={{ verticalAlign: "bottom" }}>
              {" "}
              restaurant_menu
            </span>{" "}
            Menus
          </Link>
        </li>
        <li>
          <Link to={"/categories"} className="nav-link">
            <span className="material-symbols-outlined" style={{ verticalAlign: "bottom" }}>
              {" "}
              category
            </span>{" "}
            Categories
          </Link>
        </li>
        <li>
          <Link to={"/admins"} className="nav-link" href="#">
            <span className="material-symbols-outlined" style={{ verticalAlign: "bottom" }}>
              {" "}
              group
            </span>{" "}
            Accounts
          </Link>
        </li>
        <li>
          <Link to={"/addAdmin"} className="nav-link" href="#">
            <span className="material-symbols-outlined" style={{ verticalAlign: "bottom" }}>
              {" "}
              person_add
            </span>{" "}
            Add Admin
          </Link>
        </li>
        <li>
          <a onClick={handleLogout} className="nav-link" href="#">
            <span className="material-symbols-outlined" style={{ verticalAlign: "bottom" }}>
              {" "}
              logout
            </span>{" "}
            Logout
          </a>
        </li>
      </ul>
    </section>
  );
};
