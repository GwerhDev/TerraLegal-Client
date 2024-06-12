import { useNavigate } from 'react-router-dom';
import s from './ContentCard.module.css';

export const ContentCard = (props) => {
  const { id, title, description, contentGallery } = props || null;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/on-sale/${id}`);
  }

  return (
    <article onClick={handleClick} className={s.container}>
      <img src={contentGallery ? contentGallery[0] : null} alt="" width="200px"/>
      <span className={s.dataContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </span>
    </article>
  )
}
