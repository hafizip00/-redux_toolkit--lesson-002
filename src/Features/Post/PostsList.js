import "./Post.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { allposts } from "./PostSlice";

function PostsList() {
  // const posts = useSelector((state) => state.Posts);
  const posts = useSelector(allposts);
  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
    );
  });
  return (
    <div>
      <h1>POSTS</h1>
      <div>{renderedPosts}</div>
    </div>
  );
}

export default PostsList;
