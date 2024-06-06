import s from "./Navigator.module.css";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const Navigator = () => {
  return (
    <nav>
      <div className={s.container}>
        <span className={s.innerContainer}>
          <section>
            <Logo />
          </section>

          <section>
            <NavMenu />
          </section>

          <section>

          </section>
        </span>
      </div>
    </nav>
  )
}
