import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMenu } from "../store/actions/actionCreators";
export const MenuRow = ({ menu, index }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Menu deleted sucessfully.", "success");
          dispatch(deleteMenu(menu.id));
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  const ingredientNames = menu?.Ingredients?.map((ingredient) => ingredient.name).join(", ");
  return (
    <tr>
      <th scope="row">{index + 1}.</th>
      <td>{menu.name}</td>
      <td>
        <img style={{ width: "150px", height: "100px" }} src={menu.imgUrl} alt={menu.name} />
      </td>
      <td>{menu.Category.name}</td>
      <td>${menu.price}</td>
      <td>{ingredientNames}</td>
      <td>{menu.User.email}</td>
      <td>
        <a onClick={handleDelete} style={{ textDecoration: "none" }} href="">
          ❌
        </a>
      </td>
      <td>
        <Link to={"/MenuFormEdit/" + menu.id} style={{ textDecoration: "none" }} href="">
          &#9998;Edit
        </Link>
      </td>
    </tr>
  );
};
