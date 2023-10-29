import Button from './Button';
import styles from './App.module.css'
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  //state가 변할 때 마다 매번 실행
  console.log("i run all the time.");
  const iRunOnlyOnce = () => {
    console.log("call the api...")
  }
  useEffect(iRunOnlyOnce, []);
  //첫 번째 render시점에는 둘 다 노출
  //두 번재부터는 i run all the time만 계속 노출
  //*** useEffect 함수는 코드가 딱 한번만 실행될 수 있도록 보호해준다.
  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

