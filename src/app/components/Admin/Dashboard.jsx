import s from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../functions';
import { logout } from '../../../middlewares/redux/actions/account.action';
import { useDispatch } from 'react-redux';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/");
  }

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
          <div className='divider' />
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </ul>
      </span>
    </div>
  )
}
