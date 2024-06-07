import s from './Logo.module.css';
import logo from '../../../assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link className={s.container} to={'/'}>
      <img src={logo} alt="" width={65} />
    </Link>
  )
}
