import s from './ContentCard.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../functions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContent } from '../../../middlewares/redux/actions/admin.action';
import editIcon from '../../../assets/images/svg/white/edit-icon.svg';
import mailIcon from '../../../assets/images/svg/white/mail-icon.svg';
import phoneIcon from '../../../assets/images/svg/white/phone-icon.svg';
import deleteIcon from '../../../assets/images/svg/white/delete-icon.svg';

export const ContentCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, price, title, contentGallery } = props || null;
  const currentUser = useSelector(state => state.account.currentUser);
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
          !confirmDelete
            ?
            <span className={s.dataContainer}>
              <span>
                <h3>{title}</h3>
                <p>${price} UF</p>
              </span>
              <span className={s.actions}>
                <img className={s.action} src={mailIcon} alt="" height="30px" />
                <img className={s.action} src={phoneIcon} alt="" height="30px" />
                {
                  currentUser?.role === 'admin' &&
                  <img className={s.action} src={editIcon} alt="" height="28px" />
                }
                {
                  currentUser?.role === 'admin' &&
                  <img className={s.action} onClick={() => setConfirmDelete(true)} src={deleteIcon} alt="" height="30px" />
                }
              </span>
              <span>
                <p className={s.button} onClick={handleClick}>Ver detalles</p>
              </span>
            </span>
            :
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
