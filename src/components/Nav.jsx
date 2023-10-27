/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <nav className="flex gap-3 p-3  bg-slate-700 text-white sticky top-0 z-50">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label className="hidden" htmlFor="search">
          Search Posts
        </label>
        <input
          className="p-1 text-slate-500 focus:outline-emerald-700 rounded-lg"
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <BiSearchAlt className="animate-pulse " size="1.6rem" />
      <ul className="flex gap-3">
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
