import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    const blog = {
      title: title,
      body: body,
      author: author,
    };
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("Create has success !");
        setIsPending(false);
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="create">
      <h1>Add new Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title : </label>
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog body : </label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author : </label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="yoshi">Yoshi</option>
          <option value="mario">Mario</option>
        </select>
        {!isPending ? (
          <button className="btn">Add Blog</button>
        ) : (
          <button className="btn">Adding blog...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
