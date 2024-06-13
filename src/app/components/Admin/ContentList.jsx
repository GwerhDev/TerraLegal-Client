import s from './ContentList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllContent } from '../../../middlewares/redux/actions/admin.action';
import { ContentCard } from '../Content/ContentCard';

export const ContentList = () => {
  const dispatch = useDispatch();
  const contentList = useSelector(state => state.admin.contentList);

  useEffect(() => {
    dispatch(getAllContent());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <span className={s.titleContainer}>
        <h1>Listado de contenido</h1>
        <p>Admin dashboard</p>
      </span>
      <ul className={s.cardsContainer}>
        {
          contentList?.map((e, index) =>
            <div key={index} className={s.card}>
              <ContentCard id={e._id} title={e.title} price={e.price} contentGallery={e.contentGallery} />
            </div>
          )
        }
      </ul>
    </div>
  )
}
