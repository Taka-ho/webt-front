import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exam from './Exam'; // Examコンポーネントのファイルパスを適切に指定する

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exam/:id" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
