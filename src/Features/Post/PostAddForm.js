import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./PostSlice";

import "./Form.css";
function PostAddForm() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  });

  const savedPost = () => {
    if (post.content && post.title) {
      setPost({ ...post, id: nanoid() });
      dispatch(postAdded(post));
    }
    setPost({ content: "", title: "" });
  };

  return (
    <div className="PostForm">
      <div className="Title">
        <label htmlFor="Title">Post Title</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <div className="Title">
        <label htmlFor="Title">Post Content</label>
        <textarea
          type="text"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
      </div>
      <button className="btn" onClick={savedPost}>
        Publish
      </button>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostAddForm;
