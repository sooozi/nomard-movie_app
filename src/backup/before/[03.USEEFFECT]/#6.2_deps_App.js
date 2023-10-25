import Button from './Button';
import styles from './App.module.css'
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value)
  //console.log("i run all the time.");
  useEffect(() => {
    console.log("call the api...");
  }, []);
  //keyword가 변화할 때 코드를 실행할 거라고 리액트에게 알려주는 중
  //keyword가 변화할 때만 실행!
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("Counter", counter);
  }, [counter]);
  return ( 
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

