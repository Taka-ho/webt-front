import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Editor from './components/Editor';
import ResultOfCode from './components/ResultOfCode';
const exam = ReactDOM.createRoot(document.getElementById('exam'));
exam.render(
  <App />
);

const editor = ReactDOM.createRoot(document.getElementById('editor'));
editor.render(
  <Editor />
);

const resultOfCode = ReactDOM.createRoot(document.getElementById('code-result'));
resultOfCode.render(
  <ResultOfCode />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
