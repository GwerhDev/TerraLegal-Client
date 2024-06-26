import s from './LastContent.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastsContent } from '../../../middlewares/redux/actions/content.action';
import { LastContentCard } from './LastContentCard';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../functions';

export const LastContent = () => {
  const dispatch = useDispatch();
  const content = useSelector(state => state.content.lasts);

  useEffect(() => {
    dispatch(getLastsContent());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h2>Propiedades en venta</h2>
      <ul className={s.cardsContainer}>
        {
          content?.map((e, index) =>
            <div key={index} className={s.card}>
              <LastContentCard id={e._id} title={e.title} price={e.price} contentGallery={e.contentGallery} />
            </div>
          )
        }
      </ul>
      <Link onClick={scrollToTop} to={'/on-sale'} className={s.button}>
        <button className={s.button}>
          Ver más
        </button>
      </Link>
    </div>
  )
}
