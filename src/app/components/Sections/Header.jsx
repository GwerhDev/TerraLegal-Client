import s from './Header.module.css';
/* import mailIcon from '../../../assets/images/svg/logo.svg';
import phoneIcon from '../../../assets/images/svg/logo.svg';
 */
export const Header = () => {
  return (
    <header>
      <section className={s.container}>
        <span className={s.leftSection}>
          <span className={s.headerTitle}>
            <h1>Terrenos en venta</h1>
          </span>
        </span>
        <span className={s.rightSection}>
{/*           <span className={s.contactContainer}>
            <ul className={s.contact}>
              <h2>Contacto</h2>
              <li>
                <img src={mailIcon} alt="email" width={"25px"} />
                <a href='mailto:mauricio.barnechea@gmail.com'>mauricio.barnechea@gmail.com</a>
              </li>
              <li>
                <img src={phoneIcon} alt="" width={"25px"} />
                <a href='tel:+569 8575 3922'>+569 8575 3922</a>
              </li>

              <li>
                <img src={mailIcon} alt="email" width={"25px"} />
                <a href='mailto:yfl.abogada@gmail.com'>yfl.abogada@gmail.com</a>
              </li>
              <li>
                <img src={phoneIcon} alt="" width={"25px"} />
                <a href='tel:+569 7634 9623'>+569 7634 9623</a>
              </li>
            </ul>
          </span>
 */}        </span>
      </section>
    </header>
  )
}
