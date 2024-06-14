import s from './ContentCard.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../functions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContent } from '../../../middlewares/redux/actions/admin.action';
/* import editIcon from '../../../assets/images/svg/white/edit-icon.svg';
 */import mailIcon from '../../../assets/images/svg/white/mail-icon.svg';
import phoneIcon from '../../../assets/images/svg/white/phone-icon.svg';
import deleteIcon from '../../../assets/images/svg/white/delete-icon.svg';

export const ContentCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, price, title, contentGallery } = props || null;
  const currentUser = useSelector(state => state.account.currentUser);
  const [showEmails, setShowEmails] = useState(false);
  const [showPhones, setShowPhones] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClick = () => {
    navigate(`/on-sale/${id}`);
    scrollToTop();
  }

  const handleDelete = () => {
    dispatch(deleteContent(id));
    setConfirmDelete(false);
  }

  return (
    <article className={s.container}>
      <span className={s.innerContainer}>
        <img className={s.image} onClick={handleClick} src={contentGallery ? contentGallery[0] : null} alt="" width="200px" />
        {
          !showEmails && !showPhones && !confirmDelete &&
          <span className={s.dataContainer}>
            <span>
              <h3>{title}</h3>
              <p>${price} UF</p>
            </span>
            <span className={s.actions}>
              <img className={s.action} onClick={() => setShowEmails(true)} src={mailIcon} alt="" height="30px" />
              <img className={s.action} onClick={() => setShowPhones(true)} src={phoneIcon} alt="" height="30px" />

              {/*                 {
                  currentUser?.role === 'admin' &&
                  <img className={s.action} src={editIcon} alt="" height="28px" />
                } */}

              {
                currentUser?.role === 'admin' &&
                <img className={s.action} onClick={() => setConfirmDelete(true)} src={deleteIcon} alt="" height="30px" />
              }
            </span>
            <span>
              <p className={s.button} onClick={handleClick}>Ver detalles</p>
            </span>
          </span>
        }

        {
          showEmails &&
          <span className={s.dataContainer}>
            <img src={mailIcon} alt="email" width={"25px"} />
            <a href='mailto:mauricio.barnechea@gmail.com'>mauricio.barnechea@gmail.com</a>
            <a href='mailto:yfl.abogada@gmail.com'>yfl.abogada@gmail.com</a>
            <p className={s.button} onClick={() => setShowEmails(false)}>Volver</p>
          </span>
        }

        {
          showPhones &&
          <span className={s.dataContainer}>
            <img src={phoneIcon} alt="" width={"25px"} />
            <a href='tel:+569 8575 3922'>+569 8575 3922</a>
            <a href='tel:+569 7634 9623'>+569 7634 9623</a>
            <p className={s.button} onClick={() => setShowPhones(false)}>Volver</p>
          </span>
        }

        {
          confirmDelete &&
          <span className={s.dataContainer}>
            {
              currentUser?.role === 'admin' &&
              <ul className={s.confirmDelete}>
                <p className={s.admin}>¿Eliminar {'"' + title + '"'}?</p>
                <button onClick={handleDelete}>Sí</button>
                <button onClick={() => setConfirmDelete(false)}>No</button>
              </ul>
            }
          </span>
        }
      </span>
    </article>
  )
}
