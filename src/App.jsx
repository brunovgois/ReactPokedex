import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import { useGetPokemons } from "./hooks/useGetPokemons";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const pokemons = useGetPokemons(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );
  const pokeList = pokemons.map((pokemon) => (
    <Pokemon data={pokemon} key={pokemon.id} />
  ));

  return (
    <Container>
      <Header>
        <Title>Name or Number</Title>
        <Input type="text" />
        <SearchBtn>
          <FaSearch size={14} color='#f8fafc'/>
        </SearchBtn>
      </Header>

      <PokeGrid>{pokeList}</PokeGrid>
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
  
`
const PokeGrid = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
