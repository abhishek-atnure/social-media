import React, { useState } from "react";

function Form({ user }) {
  const [desc, setDesc] = useState("");

  const createPost = async (name, desc) => {
    const data = await fetch(`/posts/${user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, desc }),
    });
    await data.json();
    // console.log(response);
  };

  const handleSubmit = (e) => {
    // console.log(user.name, desc, user.id);
    createPost(user.name, desc);
  };

  const logout = () => {
    window.location = "/";
    localStorage.removeItem("user");
  };

  return (
    <div className="form-div">
      <h1 className="headline">
        <span id="color-span">Add</span> a post
      </h1>
      <button id="logout" onClick={logout}>
        Logout
      </button>
      <form onSubmit={handleSubmit}>
        <input
          id="post-input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
        />
        <button id="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
