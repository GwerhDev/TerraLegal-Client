import { Contact } from "../Contact/Contact";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={s.container}>
        <Contact />
      </div>
    </footer>
  )
}
