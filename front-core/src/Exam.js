import React, { useEffect, useState } from 'react';
import { useParams, BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './components/Editor';
import Not_Found from './components/NotFound';

const Exam = () => {
  const { id } = useParams();
  const [isValid, setIsValid] = useState(null);
  const [params, setParams] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8000/api/confirmation/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setParams(id);
      setIsValid(data[0]);
    };
    fetchData();
  }, [id]);

  if (isValid === null) {
    return null;
  } else if (isValid === true) {
    return <Editor />;
  } else if (isValid === false) {
    return <Not_Found />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/exam/:id" element={<Not_Found />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Exam;
