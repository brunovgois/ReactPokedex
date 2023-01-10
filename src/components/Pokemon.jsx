import styled from "styled-components";

export default function Pokemon({ data }) {
  return (
    <PokeListItem>
      <ImageContainer>
        <img src={data.img} alt="pokemon profile picture" />
      </ImageContainer>
      <PokeNumberWrapper>
        <PokeNumber>#{data.num}</PokeNumber>
      </PokeNumberWrapper>
      <Name>{data.name}</Name>

      {/* <p>TODO: type</p> */}
    </PokeListItem>
  );
}

const PokeListItem = styled.li``;

const ImageContainer = styled.div`
  background-color: #d1d5db;
  display: flex;
  justify-content: center;
`;
const PokeNumberWrapper = styled.div`
background-color: #f9fafb;
width: 50%;
border-radius: 0 10px 10px 0;
margin-top: -3px;
margin-rigth: 25px
`
const PokeNumber = styled.p`
  font-size: 10px;
  margin: 0;
`;

const Name = styled.p`
  margin: 0;
  font-weight: 600;
`