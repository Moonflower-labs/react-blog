/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import api from "../api/posts";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="p-4">
      <div className="text-center text-2xl mb-4 p-1 max-w-sm mx-auto rounded-full  bg-blue-200">
        <h2>Create a new post</h2>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="text-center max-w-md mx-auto">
          <div className="flex flex-col ">
            <label className="mb-4 " htmlFor="postTitle">
              Title
            </label>
            <input
              className="mb-4 border border-rose-900 rounded-md bg-gray-200 focus:bg-gray-100 px-2 py-1"
              type="text"
              id="postTitle"
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-4" htmlFor="postBody">
              Post
            </label>
            <textarea
              className="mb-4 border border-rose-900 rounded-md bg-gray-200 focus:bg-gray-100 p-2"
              rows="12"
              type="text"
              id="postBody"
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white p-2 rounded-md bg-sky-400"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewPost;
