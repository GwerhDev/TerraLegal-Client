import s from './Logo.module.css';
import logo from '../../../assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../functions';

export const Logo = () => {
  return (
    <Link onClick={scrollToTop} className={s.container} to={'/'}>
      <img src={logo} alt="" width={65} />
    </Link>
  )
}
