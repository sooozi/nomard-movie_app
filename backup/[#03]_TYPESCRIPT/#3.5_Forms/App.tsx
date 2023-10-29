import { useState } from "react";

function App() {
  //input value값 받아오기
  const [value, setValue] = useState("");
  //인풋값 변화 감지 & event들에 타입을 추가하는 방법
  //FormEvent를 사용해서 어떤 종류의 element가 onChange이벤트를 발생시킬지 특정할 수 있다.
  const onChange = (event : React.FormEvent<HTMLInputElement>) => {
    //리액트에서는 target으로 쓰지만 타입스크립트에서는 currentTarget을 사용!
    const {
      currentTarget: {value},
    } = event;
    setValue(value);
  };

  const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return ( 
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>log in</button>
      </form>
    </div>
  );
}

export default App;

