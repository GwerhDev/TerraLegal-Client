import s from './ContentList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContent } from '../../../middlewares/redux/actions/admin.action';

export const ContentList = () => {
  const dispatch = useDispatch();
  const contentList = useSelector(state => state.admin.contentList);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <span className={s.title}>
        <h1>Listado de contenido</h1>
      </span>
      <span className={s.buttonsContainer}>
        <ul>
          {
            contentList?.map((e, index) =>
              <li key={index} className={s.button}>
                <span>
                  <p>{e.title}</p>
                </span>
              </li>
            )
          }
        </ul>
      </span>
    </div>
  )
}
