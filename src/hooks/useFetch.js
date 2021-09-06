import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Impossible retrieve blogs");
          }
          return resp.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborded");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
