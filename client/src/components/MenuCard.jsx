import { Link } from "react-router-dom";

export const MenuCard = ({ menu }) => {
  console.log(menu);

  const submitAdd = (e) => {
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Feature is coming soon..',
    })
  }
  return (
    <div className="food-items">
      <Link to={`/menuDetail/${menu.id}`}>
        <img src={menu.imgUrl} alt="" />
      </Link>
      <div className="details">
        <div className="details-sub">
          <h5>{menu.name}</h5>
          <h5 className="price" style={{color: 'red'}}> ${menu.price} </h5>
        </div>
        <p>{menu.Category.name}</p>
        <button onClick={submitAdd}>ADD</button>
      </div>
    </div>
  );
};
