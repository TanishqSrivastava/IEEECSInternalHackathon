import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="list-group">
      {posts.map((post) => (
        <Link
          key={post._id} // Moved the key prop to the Link component
          className="list-group-item list-group-item-action flex-column align-items-start"
          to={`/post/${post._id}`}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
          </div>
          {/* Added conditional rendering to check if author exists */}
          <small>Created by {post.author ? post.author.name : "Unknown"}</small>
          <br />
          <small className="overflow-hidden">{post.description}</small>
          <div className="mt-1">
            Related Topics:
            {/* Added conditional rendering to check if tags exist */}
            {post.tags && post.tags.map((tag) => (
              <span key={tag._id} className="badge badge-secondary m-1 p-2">{tag.name}</span>
            ))}
            <h6 className="mt-2">
              {post.upvotes.length} Likes | {post.views} Views
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
