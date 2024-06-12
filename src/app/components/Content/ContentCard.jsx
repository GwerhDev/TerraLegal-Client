import s from './ContentCard.module.css';

export const ContentCard = (props) => {
  const { title, description, contentGallery } = props || null;

  return (
    <article className={s.container} style={{ backgroundImage: contentGallery ? `url(${contentGallery[0]})` : null }}>
      <span className={s.dataContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </span>
    </article>
  )
}
