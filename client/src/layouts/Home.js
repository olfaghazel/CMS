import React, { useState, useEffect } from 'react';

import { getApi } from '../utils/Api';

import BlogCard from '../components/BlogCard';
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(async () => {
    const res = await getApi('blog');
    setBlogs(res);
  }, []);
  return (
    <div className='d-flex justify-content-around flex-wrap '>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
