import React, { useState, useEffect } from 'react';
import '../ResultOfCode.css';

const ResultOfCode = ({ fileName, fileContent, arrayOfFiles }) => {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileContent, setSelectedFileContent] = useState('');
  const [RelationFileAndCode, setRelation] = useState({});

  useEffect(() => {
    setSelectedFileName(fileName);
    setSelectedFileContent(fileContent);
  }, [fileName, fileContent]);

  const relationFileAndContent = () => {
    setRelation({...RelationFileAndCode, [selectedFileName]: selectedFileContent});
  };

  useEffect(() => {
    relationFileAndContent();
  }, [fileName, fileContent]);

  useEffect(() => {
    console.log(RelationFileAndCode);
  })

  return (
    <div className='result'>
      <button className="button" role="button">実行</button>
      {/* 他のコンテンツの表示など */}
    </div>
  );
}

export default ResultOfCode;
