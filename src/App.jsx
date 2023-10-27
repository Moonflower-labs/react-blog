import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import SuspenseFallback from "./components/SuspenseFallback";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <Suspense fallback={<SuspenseFallback />}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route path="/post">
            <Route index element={<NewPost />} />
            <Route path="edit/:id" element={<EditPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>{" "}
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
