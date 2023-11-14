import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../store/actions/actionCreators";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
export const AdminForm = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleBack = (e) => {
    e.preventDefault()
    navigate('/admins')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdmin(input))
      .then(() => {
        navigate("/admins");
        setTimeout(() => {
          Swal.fire("Success!", "Admin added successfully!", "success");
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message + "!",
        });
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section style={{ paddingTop: "10vh", paddingBottom: "20vh", width: "500px", marginLeft: "14%" }}>
      <div id="add-product-section" className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="w-100 p-4 p-md-5 shadow-lg bg-white rounded">
          <h2 className="text-center mb-4">Add Admin</h2>
          <form onSubmit={handleSubmit} id="add-product-form">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input onChange={handleChange} type="text" value={input.username} className="form-control" id="username" name="username" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input onChange={handleChange} type="text" value={input.email} className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input onChange={handleChange} type="password" value={input.password} className="form-control" id="password" name="password" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input onChange={handleChange} type="number" value={input.phoneNumber} className="form-control" id="phoneNumber" name="phoneNumber" />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input onChange={handleChange} type="text" value={input.address} className="form-control" id="address" name="address" />
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
  );
};
