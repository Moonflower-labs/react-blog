import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="h-screen min-h-full">
      <h1>Post not found</h1>
      <p>Well that&apos;s disappointing</p>
      <Link to="/" className="text-yellow-500 ">
        Back to Homepage
      </Link>
    </main>
  );
};

export default Missing;
