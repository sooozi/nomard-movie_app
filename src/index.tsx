import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root')); => 오류발생!!!!!!!
//https://velog.io/@syncstar/HTMLElement-null-%ED%98%95%EC%8B%9D%EC%9D%98-%EC%9D%B8%EC%88%98%EB%8A%94-Element-DocumentFragment-%ED%98%95%EC%8B%9D%EC%9D%98-%EB%A7%A4%EA%B0%9C-%EB%B3%80%EC%88%98%EC%97%90-%ED%95%A0%EB%8B%B9%EB%90%A0-%EC%88%98-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4.-%EC%98%A4%EB%A5%98
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor: "#111"
};


const lightTheme = {
  textColor:"#111",
  backgroundColor: "whitesmoke"
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
