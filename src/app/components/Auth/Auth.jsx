import s from './Auth.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../../../middlewares/redux/actions/account.action';

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    dispatch(auth(token, navigate));
  }, [dispatch, navigate, token]);

  return (
    <div className={s.container}>

    </div>
  )
}
