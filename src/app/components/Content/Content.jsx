import { useEffect } from 'react';
import s from './Content.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../../../middlewares/redux/actions/content.action';
import { ContentCard } from './ContentCard';

export const Content = () => {
  const dispatch = useDispatch();
  const content = useSelector(state => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h2>Propiedades en venta</h2>
      <ul className={s.cardsContainer}>
        {
          content?.map((e, index) =>
            <div key={index} className={s.card}>
              <ContentCard title={e.title} description={e.description} contentGallery={e.contentGallery} />
            </div>
          )
        }
      </ul>
    </div>
  )
}
