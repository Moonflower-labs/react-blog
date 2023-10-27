/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Post from "./Post";
import { Fade } from "react-awesome-reveal";

const Feed = ({ posts }) => {
  const hasMorePosts = posts.length > 1;

  return (
    <>
      {posts.map((post, index) => (
        <Fade cascade damping={1} key={post.id}>
          <Post
            key={post.id}
            post={post}
            hasMorePosts={index < posts.length - 1}
          />
        </Fade>
      ))}
    </>
  );
};

export default Feed;
