import BlogList from "../components/BlogList";
import Loader from "../components/Loader";

import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    setData: setBlogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <Loader />}
      {blogs && <BlogList blogs={blogs} title="Blogs" />}
    </div>
  );
};

export default Home;
