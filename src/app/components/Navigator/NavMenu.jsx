import { scrollToTop } from "../../../functions";
import s from "./NavMenu.module.css";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <ul className={s.container}>
      <Link onClick={scrollToTop} to={'/'}>Inicio</Link>
      <Link onClick={scrollToTop} to={'/on-sale'}>En venta</Link>
      <Link onClick={scrollToTop} to={'/contact'}>Contacto</Link>
    </ul>
  )
}
