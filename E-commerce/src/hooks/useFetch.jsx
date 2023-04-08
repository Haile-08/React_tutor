const { useEffect, useState } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async (url) => {
      axios
        .get(url)
        .then(function (response) {
          // handle success
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          setError(true);
        });
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
