import { useParams, BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './components/Editor';
import Not_Found from './components/NotFound';
import { useState, useEffect } from 'react';

function Exam() {
  const { id } = useParams();
  const [isValid, setIsValid] = useState(null);

  const CheckValidity = async () => {
    const url = `http://localhost:8000/api/confirmation/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setIsValid(data[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      await CheckValidity();
    };

    fetchData();
  }, []);

  if (isValid === null) {
    return null;
  } else if (isValid === true) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<EditorComponent />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (isValid === false) {
    return <Not_Found />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Not_Found />} />
        </Routes>
      </BrowserRouter>
    );
  }

  function EditorComponent() {
    return <Editor />;
  }
}

export default Exam;
