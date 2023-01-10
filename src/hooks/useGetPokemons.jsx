import { useState, useEffect } from "react";

export function useGetPokemons(url){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async() => {
      try{
        const response = await fetch(url);
        const json = await response.json();
        setData(json.pokemon)
      } catch(e){
        console.log(e)
      }
    };
    fetchPokemonData();
  }, [url]);

  return data;
}