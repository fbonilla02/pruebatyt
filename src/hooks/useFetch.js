import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.test.interactiva.net.co/api/${endpoint}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error("Error en la API:", error));
  }, [endpoint]);

  return data;
};
