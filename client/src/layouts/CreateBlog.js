import React, { useState } from 'react';

import { postApi } from '../utils/Api';
import { useHistory } from 'react-router-dom';
import { setAlert, getAlerts } from '../utils/Alert';

import Navbar from '../components/Navbar';
import Alert from '../components/Alert';

const CreateBlog = () => {
  const history = useHistory();

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [alerts, setAlerts] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await postApi('blog', {
      title,
      content,
      description,
      image,
    });

    if (!res.error) {
      history.push('/');
      setImage('');
      setTitle('');
      setDescription('');
      setContent('');
    } else {
      res.error.forEach((error) => {
        return setAlert({
          msg: error.msg,
          alertType: 'danger',
          id: Math.random(),
        });
      });
      setAlerts(getAlerts());
    }
  };

  return (
    <>
      <Navbar />
      {alerts && <Alert alerts={alerts} />}
      <form className='register' onSubmit={(e) => onSubmit(e)}>
        <h3>Create Blog</h3>

        <div className='form-group'>
          <label>Image Link</label>
          <input
            type='text'
            className='form-control'
            placeholder='Image Link'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>description</label>
          <input
            type='description'
            className='form-control'
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>content</label>
          <input
            type='content'
            className='form-control'
            placeholder='Enter content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-dark btn-lg btn-block'>
          Save
        </button>
      </form>
    </>
  );
};

export default CreateBlog;
