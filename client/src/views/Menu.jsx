import { useEffect } from "react";
import { MenuCard } from "../components/MenuCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../store/actions/actionCreators.js";
import { useState } from "react";
import { Loader } from "../components/Loader.jsx";
export const Menu = () => {
  const [loading, setLoading] = useState(true);
  const { menus } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(fetchMenus()).finally(() => setLoading(false));
    }, 1500);
  }, []);

  return (
    <>
      {!loading ? (
        <><h1
        style={{
          fontFamily: "cursive",
          fontSize: "48px",
          color: "var(--primary-color)",
          textAlign: "center",
          textShadow: "2px 2px 4px #000",
          marginBottom: "5vh",
        }}>
        Our Menu
      </h1>
        <section className="menu" style={{ paddingBottom: "10vh" }}>
          {menus.map((menu, idx) => (
            <MenuCard key={idx} menu={menu} />
          ))}
        </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
