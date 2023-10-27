/* eslint-disable react/prop-types */
import Feed from "../components/Feed";
// eslint-disable-next-line no-unused-vars
import { AiOutlineLoading } from "react-icons/ai";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, fetchError } = useContext(DataContext);

  return (
    <main className="h-screen min-h-full overflow-y-auto">
      {fetchError && (
        <div className="h-screen min-h-full flex justify-center items-center">
          <p className="text-red-400 translate-y-[-400%]  font-mono text-2xl font-semibold">
            Network Error
          </p>
        </div>
      )}
      {!fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p> No posts to display</p>
        ))}
    </main>
  );
};

export default Home;

// const Home = () => {
//   const { searchResults, fetchError, isLoading } = useContext(DataContext);

//   return (
//     <main className="h-screen min-h-full overflow-y-auto">
//       {isLoading && (
//         <div className="flex flex-col gap-4 text-3xl p-3 mx-auto">
//           <p> Loading Posts...</p>
//           <AiOutlineLoading className="animate-spin " />
//         </div>
//       )}
//       {!isLoading && fetchError && (
//         <p className="text-red-400"> Network Error</p>
//       )}
//       {!isLoading &&
//         !fetchError &&
//         (searchResults.length ? (
//           <Feed posts={searchResults} />
//         ) : (
//           <p> No posts to display</p>
//         ))}
//     </main>
//   );
// };

// export default Home;
