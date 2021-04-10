import React from "react";
import "./BlogInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const BlogInfo = ({ blog }) => {
  return (
    <div>
      <div className="col">
        <div className="card h-100 card-container">
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <img
                style={{ width: "5rem" }}
                src={blog.img}
                className="card-img-left mr-3"
                alt="..."
              />
              <div>
                <h5 className="card-title">{blog.name}</h5>
                <small className="text-muted">{blog.date}</small>
              </div>
            </div>
            <div className="mt-5">
              <h5>{blog.headline}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
            <div className="overlay">
                <div>
                <h5>{blog.name}</h5>
                <small>{blog.date}</small>
                <h4 className="mt-5">{blog.headline}</h4>
                </div>
                <div className="mt-5">
                    <button className="overlay-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
