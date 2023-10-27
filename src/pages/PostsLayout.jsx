import { Outlet } from "react-router-dom";

const PostsLayout = () => {
  return (
    <div className="rounded-lg bg-sky-200 h-screen min-h-full m-8 p-4 overflow-y-auto">
      <h1 className="mb-3 text-2xl text-orange-400">PostsLayout</h1>
      <Outlet />
    </div>
  );
};

export default PostsLayout;
