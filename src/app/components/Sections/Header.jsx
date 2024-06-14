import s from './Header.module.css';
import logo from '../../../assets/images/svg/black/logo.svg';

export const Header = () => {
  return (
    <header>
      <section className={s.container}>
        <span className={s.leftSection}>
          <span className={s.headerTitle}>
            <img src={logo} alt="" width={"100px"}/>
            <h1>TerraLegal</h1>
          </span>
        </span>
        <span className={s.rightSection}>
        </span>
      </section>
    </header>
  )
}
