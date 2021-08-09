import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number} onClick={() => paginate(number)}>
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
