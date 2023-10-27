/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Post = ({ post, hasMorePosts }) => {
  return (
    <>
      <article className="m-4">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-2xl mb-2">{post.title}</h2>
          <p className="mb-2">{post.datetime}</p>
        </Link>
        <p className="">
          {post.body.length <= 30 ? post.body : `${post.body.slice(0, 30)}...`}
        </p>
      </article>
      {hasMorePosts && <hr className="h-1 bg-sky-100" />}
    </>
  );
};

export default Post;
