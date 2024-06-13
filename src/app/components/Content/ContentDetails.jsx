import s from './ContentDetails.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentDetails } from '../../../middlewares/redux/actions/content.action';

export const ContentDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const contentDetails = useSelector(state => state.content.details);

  useEffect(() => {
    dispatch(getContentDetails(id));
  }, [dispatch, id]);

  return (
    <div className={s.container}>
      <img className={s.galleryImage} src={contentDetails?.contentGallery ? contentDetails.contentGallery[0] : null} alt="" width="100%" />
      <span className={s.detailsContainer}>
        <h1>${contentDetails?.price} UF</h1>
        <h2>{contentDetails?.title}</h2>
        <p>{contentDetails?.description}</p>
      </span>
    </div>
  )
}
