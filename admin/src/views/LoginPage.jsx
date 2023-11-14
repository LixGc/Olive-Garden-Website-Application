import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../store/actions/actionCreators";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitLogin = async (event) => {
    event.preventDefault();
    dispatch(handleLogin({ email, password }))
      .then(() => {
        navigate("/");
      })
  };
  return (
    <section className="login">
      <div className="login-wrapper">
        <form onSubmit={submitLogin}>
          <h2>Login</h2>
          <div className="input-field">
            <input onChange={(el) => setEmail(el.target.value)} type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input onChange={(el) => setPassword(el.target.value)} type="password" required />
            <label>Enter your password</label>
          </div>
          <br />
          <br />
          <button type="submit">Log In</button>
          <div className="register-acccount" style={{ color: "rgb(255, 255, 255)" }}></div>
        </form>
      </div>
    </section>
  );
};
