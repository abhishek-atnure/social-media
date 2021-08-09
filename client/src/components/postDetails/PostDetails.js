import React, { Fragment, useState, useEffect } from "react";
import like from "./like-icon.svg";
import comment from "./comment-icon.svg";
import { Link } from "react-router-dom";

function PostDetails({ match }) {
  const [content, setContent] = useState("");
  const [post, setPost] = useState();
  const [id, setId] = useState(match.params.id);

  let user = JSON.parse(localStorage.getItem("user"));
  let name = user.name;
  // console.log(name);
  const fetchSinglePost = async (id) => {
    const data = await fetch(`/posts/${id}`);
    const response = await data.json();
    // console.log(response);
    setPost(response);
  };

  const handleSubmit = async (e) => {
    const data = await fetch(`/posts/${post._id}/comment`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, name }),
    });
    const response = await data.json();
    console.log(response);
  };
  useEffect(() => {
    fetchSinglePost(id);
  }, [content, id]);

  // console.log(post);

  return (
    <Fragment>
      {post && (
        <div className="post-details">
          <Link to="/" id="back">
            back
          </Link>
          <h2 id="h2-tag">{post.name}</h2>
          <p>{post.desc}</p>
          <hr></hr>
          <div className="post-activity">
            <span id="btns">
              <img src={like} alt="like-button" />
              <p>{post.likes.length}</p>
            </span>

            <span id="btns">
              <img src={comment} alt="comment-button" />
              <p>{post.comments.length}</p>
            </span>
          </div>

          <div className="comment-container">
            <form className="comment-input" onSubmit={handleSubmit}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="comment-input"
              />
              <button id="comment-btn">Comment</button>
            </form>
            <div className="comment-list">
              {post.comments.length > 0 ? (
                post.comments.map((element, index) => (
                  <div className="comment-div" key={index}>
                    <h2 id="h2-tag">{element.name} </h2>
                    <p>{element.content}</p>
                  </div>
                ))
              ) : (
                <h4>No comments</h4>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default React.memo(PostDetails);
