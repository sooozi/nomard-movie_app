import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;



function App() {
  return ( 
    <Wrapper>
      <Title>hello!!!</Title>
    </Wrapper>
  );
}

export default App;

