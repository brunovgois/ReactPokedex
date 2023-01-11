import styled from "styled-components";
import { pokeTypeColors, whiteColorBgText } from "../utils/colors";

export default function Pokemon({ data }) {



  const pokeTypes = data.type.map((type, idx) => {
    const isTextWhite = whiteColorBgText.includes(type)

    return (
      <PokeTypeContainer textShouldBeWhite={isTextWhite} bgColor={pokeTypeColors[data.type[idx]]} >
        <PokeTypeDesc>{type}</PokeTypeDesc>
      </PokeTypeContainer>
    );
  })

  return (
    <PokeListItem>
      <ImageContainer>
        <Image src={data.img} alt="pokemon profile picture" />
      </ImageContainer>
      <PokeNumberWrapper>
        <PokeNumber>#{data.num}</PokeNumber>
      </PokeNumberWrapper>
      <Name>{data.name}</Name>

      <TypeContainer>{pokeTypes}</TypeContainer>
    </PokeListItem>
  );
}

const PokeListItem = styled.li`
  margin: 12px`;

const ImageContainer = styled.div`
  background-color: #d1d5db;
  max-width: 300px
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const PokeNumberWrapper = styled.div`
  background-color: #f9fafb;
  width: 50%;
  border-radius: 0 10px 10px 0;
  margin-top: -3px;
  margin-rigth: 25px;
`;
const PokeNumber = styled.p`
  font-size: 10px;
  margin: 0;
`;

const Name = styled.p`
  margin: 0;
  font-weight: 600;
  margin-bottom: 2px
`;
const TypeContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: 2px
`
const PokeTypeContainer = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  width: 30%;
  display: flex;
  justify-content: center;
  color: ${(props)=> props.textShouldBeWhite ? '#f9fafb' : '#000'}
`;

const PokeTypeDesc = styled.p`
  margin: 0;
  font-size: 10px;
`;
