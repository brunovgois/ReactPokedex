import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import { useGetPokemons } from "./hooks/useGetPokemons";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  
  const [filterInput, setFilterInput] = useState('')

  const pokemons = useGetPokemons(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );

  const handleTextCange = (e) => {
    setFilterInput(e.target.value)
  }

  return (
    <Container>
      <Header>
        <Title>Name or Number</Title>
        <Input type="text" value={filterInput} onChange={handleTextCange}/>
        <SearchBtn>
          <FaSearch size={16} color="#f8fafc" />
        </SearchBtn>
      </Header>

      <PokeGrid>
        {
          pokemons
          .filter(pokemon => (pokemon.name.match(new RegExp(filterInput, 'i')) || pokemon.num.match(new RegExp(filterInput))))
          .map(pokemon => <Pokemon data={pokemon} key={pokemon.id}/>)
        }
      </PokeGrid>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
const Header = styled.header`
  background-color: #262626;
  padding: 6px;
  color: #f8fafc;
  padding-left: 2rem;
`;
const Title = styled.h2`
  margin: 12px 0 8px 0;
`;
const Input = styled.input`
  font-size: 18;
  padding: 8px;
  margin-bottom: 6px;
  border: 2px solid #78716c;
  border-radius: 3px;
  min-width: 180px;
  margin-right: 10px;
`;
const SearchBtn = styled.button`
  padding: 8px 12px;
  background-color: #ea580c;
  border: none;
  cursor: pointer;
`;
const PokeGrid = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  }
`;
