import React, { useState, useEffect } from 'react';

import { getApi } from '../utils/Api';

import Navbar from '../components/Navbar';

const BlogDisplay = ({ blogId }) => {
  const [blog, setBlog] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await getApi(`blog/${blogId}`);
      setBlog(res);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='d-flex flex-column container'>
        <h3 className='blog-title'>{blog.title}</h3>
        <img className='blog-img' src={blog.image} alt='blogs image' />
        <h6 className='blog-descrip'>{blog.description}</h6>
        <p className='blog-content'>{blog.content}</p>
      </div>
    </>
  );
};

export default BlogDisplay;
