import React, { useState, useEffect } from 'react';

import { getApi } from '../utils/Api';

import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await getApi('blog');
    setBlogs(res);
  }
  return (
    <>
      <Navbar />
      <div className='d-flex flex-column align-items-center '>
        {blogs && blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </>
  );
};

export default Home;
