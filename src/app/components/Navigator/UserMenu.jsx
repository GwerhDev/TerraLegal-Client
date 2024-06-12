import s from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../functions";

export const UserMenu = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/dashboard");
    scrollToTop();
  }

  return (
    <button onClick={handleClick} className={s.container}>
      Dashboard
    </button>
  )
}
