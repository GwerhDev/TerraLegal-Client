import s from "./NavMenu.module.css";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <ul className={s.container}>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/on-sale'}>En venta</Link>
      <Link to={'/contact'}>Contacto</Link>
    </ul>
  )
}
