import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Error article do not exist...</h1>
      <Link to="/">Redirect to the HomePage...</Link>
    </div>
  );
};

export default NotFound;
