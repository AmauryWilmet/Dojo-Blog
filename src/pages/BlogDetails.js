import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useHistory } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog-details">
      {isLoading && <Loader />}
      {!error && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          {!isLoading && (
            <button className="btn" onClick={handleDelete}>
              Delete
            </button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
