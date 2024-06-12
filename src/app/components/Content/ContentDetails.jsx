import { useDispatch } from 'react-redux';
import s from './ContentDetails.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentDetails } from '../../../middlewares/redux/actions/content-details.action';

export const ContentDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getContentDetails(id));
  }, [dispatch, id]);

  return (
    <div className={s.container}>
      <img src="" alt="" />
    </div>
  )
}
