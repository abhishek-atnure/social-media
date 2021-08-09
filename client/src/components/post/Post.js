import React, { useState } from "react";
import { Link } from "react-router-dom";
import like from "./like-icon.svg";
import comment from "./comment-icon.svg";
import person from "./person.svg";

function Post({ element, user, setIsLiked }) {
  const [userId, setUserId] = useState(user);
  const likePost = async () => {
    const response = await fetch(`/posts/${element._id}/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    console.log(data);
    setIsLiked((prevState) => !prevState);
  };
  return (
    <div className="post">
      <div className="person-deatils">
        <img src={person} alt="icon" />
        <h2 id="h2-tag">{element.name}</h2>
      </div>
      <Link id="p-link-tag" to={`/${element._id}`}>
        <p>{element.desc}</p>{" "}
      </Link>

      <hr></hr>
      <div className="post-activity">
        <span id="btns">
          <img onClick={likePost} src={like} alt="like-button" />
          <p>{element.likes.length}</p>
        </span>

        <span id="btns" className="comment-btns">
          <Link to={`/${element._id}`}>
            <img src={comment} alt="comment-button" />
          </Link>
          <p id="p-tag">{element.comments.length}</p>
        </span>
      </div>
    </div>
  );
}

export default Post;
