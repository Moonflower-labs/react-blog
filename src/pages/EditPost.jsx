/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import api from "../api/posts";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen p-4">
      {editTitle && (
        <>
          <div className="text-center text-2xl mb-4 p-1 max-w-sm mx-auto rounded-full  bg-blue-200">
            <h2>Edit post</h2>
          </div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="text-center max-w-md mx-auto">
              <div className="flex flex-col ">
                <label className="mb-4" htmlFor="postTitle">
                  Title
                </label>
                <input
                  className="mb-4 border border-rose-900 rounded-md bg-gray-200 focus:bg-gray-100 px-2 py-1"
                  type="text"
                  id="postTitle"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
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
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="text-white p-2 rounded-md bg-sky-400"
                onClick={() => handleEdit(post.id)}
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h1>Post not found</h1>
          <p>Well that&apos;s disappointing</p>
          <Link to="/" className="text-yellow-500 ">
            Back to Homepage
          </Link>
        </>
      )}
    </main>
  );
};

export default EditPost;
