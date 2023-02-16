import React, {useState, useEffect} from 'react';
const useFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const resp2 = await resp.json();
    setData(resp2.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useFetch;
