import React from 'react';
import ReactDOM from 'react-dom/client';
import Exam from './App';
import reportWebVitals from './reportWebVitals';
import Editor from './components/Editor';
import FileTree from './components/fileTree';
import Tab from './components/tab';

const exam = ReactDOM.createRoot(document.getElementById('exam'));
exam.render(
  <React.StrictMode>
    <Exam />
  </React.StrictMode>
);

const editor = ReactDOM.createRoot(document.getElementById('editor'));
editor.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);

const tab = ReactDOM.createRoot(document.getElementById('tab'));
tab.render(
  <React.StrictMode>
    <Tab />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
