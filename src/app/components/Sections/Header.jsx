import s from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <section className={s.container}>
        <span className={s.leftSection}>
          <h1>Lorem Ipsum</h1>
        </span>
        <span className={s.rightSection}>
        </span>
      </section>
    </header>
  )
}
