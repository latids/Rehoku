import { useState, useEffect } from "react";

const cache = {};

function useCache(key, fetchData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (cache[key]) {
      setData(cache[key]);
      return;
    }
    const fetchDataAndCache = async () => {
      try {
        const newData = await fetchData();
        cache[key] = newData;
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndCache();
  }, [key, fetchData]);

  return data;
}

export default useCache;
