import s from "./Login.module.css";

export const Login = () => {
  return (
    <div className={s.container}>
      <form>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </form>
    </div>
  )
}
