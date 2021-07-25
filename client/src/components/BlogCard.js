import React from 'react';
import { Link } from 'react-router-dom';
const BlogCard = ({ blog }) => {
  return (
    <div className='container blog-card-container row'>
      <div className='card'>
        <img className='card-img' src={blog.image} alt='Bologna' />

        <div className='card-body'>
          <h4 className='card-title'>{blog.title}</h4>
          <small className='text-muted cat'>
            <i className='far fa-clock text-info'></i> 30 minutes
            <i className='fas fa-users text-info'></i> 4 portions
          </small>
          <p className='card-text'>{blog.description}</p>
          <Link to={`/blog/${blog._id}`} className='btn btn-info'>
            Read Recipe
          </Link>
          <div className='card-footer text-muted d-flex justify-content-between bg-transparent border-top-0'>
            <div className='views'>Oct 20, 12:45PM</div>
            <div className='stats'>
              <i className='far fa-eye'></i> 1347
              <i className='far fa-comment'></i> 12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
