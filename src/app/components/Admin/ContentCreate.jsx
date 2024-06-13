import { useNavigate } from 'react-router-dom';
import s from './ContentCreate.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContent } from '../../../middlewares/redux/actions/admin.action';
import defaultImage from '../../../assets/images/jpg/logo.jpg';

export const ContentCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [published, setPublished] = useState(false);
  const [description, setDescription] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const updating = useSelector(state => state.admin.updating)

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handlePrice = (e) => {
    setPrice(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  }

  const handlePublished = (e) => {
    setPublished(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !image || !price) return;

    const formData = {
      price,
      title,
      published,
      description,
    }

    dispatch(createContent(formData, image, navigate));
  }

  useEffect(() => {
    if (title && image && description) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [title, image, description]);

  return (
    <div className={s.container}>
      {
        !updating
          ?
          <form onSubmit={handleSubmit} className={s.formContainer}>
            <h1>Crear contenido</h1>
            <span>
              <label htmlFor="title">Título</label>
              <input onInput={handleTitle} type="text" name='title' placeholder="Ingresa un título" />
            </span>

            <span>
              <label htmlFor="price">Precio (UF)</label>
              <input onInput={handlePrice} type="number" min="0" name='price' placeholder="3000" />
            </span>

            <span>
              <label htmlFor="description">Descripción</label>
              <textarea onInput={handleDescription} placeholder="Ingresa una breve descripción" />
            </span>

            <span>
              <img src={previewImage || defaultImage} alt="preview" width={100} />
              <input onChange={handleImage} type="file" />
            </span>
            <ul>
              <input onChange={handlePublished} type="checkbox" name="published" />
              <label htmlFor="published">Publicado</label>
            </ul>

            <button disabled={isButtonDisabled}>Crear</button>
          </form>
          :
          <div className={s.loader}>
            <h1>Creando contenido...</h1>
          </div>
      }
    </div>
  )
}
