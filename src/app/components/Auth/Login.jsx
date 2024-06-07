import s from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../middlewares/redux/actions/login.action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      username,
      password,
    };

    dispatch(login(userData, navigate));
  }

  return (
    <div className={s.container}>
      <form>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input onInput={handleUsername} type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input onInput={handlePassword} type="password" name="password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}
