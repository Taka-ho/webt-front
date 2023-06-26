import React, { useState } from 'react';
import '../ResultOfCode.css';
import MiddleOfResultAndEditor from './middleOfResultAndEditor';

const ResultOfCode = () => {
  const [selectedFileName, setSelectedFileName] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState([]);

  const newValues = () => {
    const [fileName, fileContent] = <MiddleOfResultAndEditor />;
    setSelectedFileName(fileName);
    setSelectedFileContent(fileContent);
  };

  return (
    <div className='result'>
      <button className='button' onClick={newValues}>実行</button>
    </div>
  );
};

export default ResultOfCode;
