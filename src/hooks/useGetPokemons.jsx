import { useState, useEffect } from "react";

export function useGetPokemons(url){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json.pokemon);  
        console.log(json.pokemon)
      })
  }, [url]);

  return data;
}