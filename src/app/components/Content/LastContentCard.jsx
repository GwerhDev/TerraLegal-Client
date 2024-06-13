import { scrollToTop } from '../../../functions';
import s from './LastContentCard.module.css';
import { useNavigate } from 'react-router-dom';

export const LastContentCard = (props) => {
  const { id, price, title, contentGallery } = props || null;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/on-sale/${id}`);
    scrollToTop();
  }

  return (
    <article onClick={handleClick} className={s.container} style={{ backgroundImage: contentGallery ? `url(${contentGallery[0]})` : null }}>
      <span className={s.dataContainer}>
        <h3>{title}</h3>
        <p>${price} UF</p>
      </span>
    </article>
  )
}
