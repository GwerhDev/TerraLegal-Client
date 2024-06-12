import s from './ContentCreate.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContent } from '../../../middlewares/redux/actions/admin.action';
import defaultImage from '../../../assets/images/jpg/logo.jpg';

export const ContentCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [published, setPublished] = useState(false);
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleTitle = (e) => {
    setTitle(e.target.value);
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

    if (!title || !description || !image) return;

    const formData = {
      title,
      published,
      description,
    }

    dispatch(createContent(formData, image));
  }

  useEffect(() => {
    if (title && image && description) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [title, image, description]);

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.formContainer}>
        <h1>Crear contenido</h1>
        <span>
          <label htmlFor="title">Título</label>
          <input onInput={handleTitle} type="text" name='title' placeholder="Ingresa un título" />
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
    </div>
  )
}
