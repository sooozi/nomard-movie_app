import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;


const rotateAni = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
    font-size: 50px;
`;

const Box = styled.div`
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  animation: ${rotateAni} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 10px;
    }
  }
`;


function App() {
  return ( 
    <Wrapper>
      <Box>
        <Emoji>🥰</Emoji>
      </Box>
        <Emoji>🥰</Emoji>
    </Wrapper>
  );
}

export default App;

