import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

//스타일은 같지만 태그를 바꾸고 싶을 때 
const Btn = styled.button`
  background-color: tomato;
  width: 100px;
  height: 100px;
  color: white;
`;

//제한 사항과 관련된 속성도 한 번에 넣을 수 있다!
const Input = styled.input.attrs({ required: true})`
  background-color: aliceblue;
`;

function App() {
  return ( 
    <Father as="span">
      <Btn>Log in</Btn>
      {/* as라는 prop을 추가한다! */}
      {/* html 태그의 속성을 여기서도 설정이 가능하다! */}
      <Btn as="a" href="/">Log in</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

