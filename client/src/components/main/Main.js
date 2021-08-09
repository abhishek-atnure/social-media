import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import { fetchPosts } from "../apiCalls";
import PostList from "../postList/PostList";
import PostDetails from "../postDetails/PostDetails";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Main() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLiked, setIsLiked] = useState(false);
  useEffect(async () => {
    let data = await fetchPosts();
    setPosts(data);
    // console.log(posts);
  }, [isLiked]);

  return (
    <Router>
      <div className="main-div">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              user ? (
                <>
                  <Form user={user} />
                  <PostList posts={posts} user={user} setIsLiked={setIsLiked} />
                </>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/login"
            render={(props) => (!user ? <Login /> : <Redirect to="/" />)}
          />
          <Route
            path="/register"
            render={(props) => (!user ? <Signup /> : <Redirect to="/" />)}
          />
          <Route path="/:id" component={user ? PostDetails : Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
