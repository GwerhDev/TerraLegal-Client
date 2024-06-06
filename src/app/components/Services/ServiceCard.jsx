import s from './ServiceCard.module.css';

export const ServiceCard = (props) => {
  const { image, title, description } = props || null;
  return (
    <article className={s.container}>
      <img src={image} alt="" width={"100%"} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
