/* eslint-disable react/prop-types */
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="flex justify-between text-4xl p-4 bg-blue-300">
      <h1 className="">{title}</h1>

      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
