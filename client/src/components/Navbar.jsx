import { Link } from "react-router-dom";

export const Navbar = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Feature is coming soon..',
    })
  }
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="nav-img" src="/logoNav.svg" alt="" />
        </Link>
      </div>
      <nav className="navbar">
        <Link to={"/menu"}>MENU</Link>
        <Link to={'/menu'} href="">ORDER NOW</Link>
        <a onClick={submitHandler}href="">JOIN WAITLIST</a>
        <a onClick={submitHandler} href="">CATERING</a>
        <a onClick={submitHandler} href="" className="login-navbar">
          LOGIN
          <img className="logo-totebag" src="https://media.olivegarden.com/images/site/cartImage_updated.svg" alt="" />
        </a>
      </nav>
    </header>
  );
};
