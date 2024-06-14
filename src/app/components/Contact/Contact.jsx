import s from './Contact.module.css';
import mailIcon from '../../../assets/images/svg/black/mail-icon.svg';
import phoneIcon from '../../../assets/images/svg/black/phone-icon.svg';

export const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <ul className={s.container}>
        <span>
          <li>
            <img src={mailIcon} alt="email" width={"25px"} />
            <a href='mailto:mauricio.barnechea@gmail.com'>
              mauricio.barnechea@gmail.com
            </a>
          </li>
          <li>
            <img src={phoneIcon} alt="" width={"25px"} />
            <a href='tel:+569 8575 3922'>+569 8575 3922</a>
          </li>
        </span>

        <span>
          <li>
            <img src={mailIcon} alt="email" width={"25px"} />
            <a href='mailto:yfl.abogada@gmail.com'>yfl.abogada@gmail.com</a>
          </li>
          <li>
            <img src={phoneIcon} alt="" width={"25px"} />
            <a href='tel:+569 7634 9623'>+569 7634 9623</a>
          </li>
        </span>
      </ul>

    </div>
  )
}
