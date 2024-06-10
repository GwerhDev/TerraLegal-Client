import { Link } from 'react-router-dom';
import s from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <div className={s.container}>
      <span className={s.title}>
        <h1>Dashboard</h1>
        <p>Elige una acción</p>
      </span>
      <span className={s.buttonsContainer}>
        <ul>
          <Link className={s.button} to='/admin/content-create'>
            Crear contenido
          </Link>
          <Link className={s.button} to='/admin/content-list'>
            Ver listado de contenido
          </Link>
        </ul>
      </span>
    </div>
  )
}
