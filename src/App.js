import Button from './Button';
import styles from './App.module.css'
import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div className="App">
      {/* <h1 className={styles.title}>Hello, world</h1> */}
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
