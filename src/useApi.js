import { useEffect, useState } from "react";

const useApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadApiData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343');
        const json = await response.json();
        setData(json.fx);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };
    loadApiData();
  }, []);
  return { data, error, loaded };
};

export default useApi
