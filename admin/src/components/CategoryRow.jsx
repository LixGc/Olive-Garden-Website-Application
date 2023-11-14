import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../store/actions/actionCreators";
export const CategoryRow = ({ category, idx }) => {
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
          dispatch(deleteCategory(category.id));
          Swal.fire("Deleted!", `${category.name} has been deleted.`, "success");
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
  return (
    <tr>
      <td scope="row">{idx + 1}.</td>
      <td scope="row">{category.name}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <a onClick={handleDelete} style={{ textDecoration: "none" }} href="">
          ❌
        </a>
      </td>
      <td>
        <Link to={"/CategoryFormEdit/" + category.id} style={{ textDecoration: "none" }} href="">
          &#9998;Edit
        </Link>
      </td>
    </tr>
  );
};
