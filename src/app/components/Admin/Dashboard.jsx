import s from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../functions';

export const Dashboard = () => {
  return (
    <div className={s.container}>
      <span className={s.title}>
        <h1>Dashboard</h1>
        <p>Elige una acción</p>
      </span>
      <span className={s.buttonsContainer}>
        <ul>
          <Link onClick={scrollToTop} className={s.button} to='/admin/content-create'>
            Crear contenido
          </Link>
          <Link onClick={scrollToTop} className={s.button} to='/admin/content-list'>
            Ver listado de contenido
          </Link>
        </ul>
      </span>
    </div>
  )
}
