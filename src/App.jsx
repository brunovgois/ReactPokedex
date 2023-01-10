import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import { useGetPokemons } from './hooks/useGetPokemons'


export default function App() {
  const pokemons = useGetPokemons('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
  
  const pokeList = pokemons.map(pokemon => <Pokemon data={pokemon} key={pokemon.id} />);

  return (
    <Container>
      <Header>
        <h2>Name or Number</h2>
        <input type="text" />
        <button>Search</button>
      </Header>

      <PokeGrid>{pokeList}</PokeGrid>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
const Header = styled.header`
  background-color: #171717;
  color: #f8fafc;
  padding-left: 2rem;
`;
const PokeGrid = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
