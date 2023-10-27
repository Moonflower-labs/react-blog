/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="min-h-screen p-4">
      <article className="max-w-screen min-w-full ">
        {post && (
          <>
            <h2 className="mb-2">{post.title}</h2>
            <p className="mb-2">{post.datetime}</p>
            <p className="mb-2">{post.body}</p>
            <Link to={`/post/edit/${post.id}`}>
              <button className="border-1 shadow-lg  py-1 px-3 rounded-md text-gray-700 bg-blue-200 m-2">
                Edit Post
              </button>
            </Link>
            <button
              className="border-1 shadow-lg  py-1 px-3 rounded-md text-white bg-red-500 "
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h1>Post not found</h1>
            <p>Well that&apos;s disappointing</p>
            <Link to="/" className="text-yellow-500 ">
              Back to Homepage
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
