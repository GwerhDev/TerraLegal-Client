import { useNavigate } from "react-router-dom";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <button onClick={handleClick} className={s.container}>
      Dashboard
    </button>
  )
}
