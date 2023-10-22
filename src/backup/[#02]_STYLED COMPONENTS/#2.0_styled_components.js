import { useState, useEffect } from 'react';

function Hello() {
  //function byFn() {
  //  console.log("Bye :(");
  //}
  //function hiFn() {
  //  console.log("Created! :)");
  //  return byFn;
  //}
  //useEffect(hiFn, []);

  useEffect( () => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    }
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return ( 
    <div className="App">
      {showing ? <Hello /> : null }
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

