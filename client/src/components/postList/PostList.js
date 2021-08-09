import React, { useState } from "react";
import Post from "../post/Post";
import Pagination from "../pagination/Pagination";

function PostList({ posts, user, setIsLiked }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //chnage page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="post-container">
      <h1 id="post-headline">Posts</h1>
      <div className="post-list">
        {currentPosts.map((element, index) => (
          <Post
            element={element}
            user={user.id}
            setIsLiked={setIsLiked}
            key={index}
          />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PostList;
