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

const Box = styled.div`
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  animation: ${rotateAni} 1s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      font-size: 10px;
    }
  }
`;


function App() {
  return ( 
    <Wrapper>
      <Box>
        <span>🥰</span>
      </Box>
    </Wrapper>
  );
}

export default App;

