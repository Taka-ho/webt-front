import React, { useState, useEffect } from 'react';
import '../ResultOfCode.css';

const ResultOfCode = ({ fileName, fileContent, arrayOfFiles }) => {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileContent, setSelectedFileContent] = useState('');
  const [RelationFileAndCode, setRelation] = useState({});

  useEffect(() => {
    setSelectedFileName(fileName);
    setSelectedFileContent(fileContent);
    setRelation(RelationFileAndCode);
  }, [fileName, fileContent]);

  const relationFileAndContent = () => {
    setRelation({ ...RelationFileAndCode, [arrayOfFiles]: selectedFileContent });
  };

  useEffect(() => {
    relationFileAndContent();
  }, [fileName, fileContent]);

  const submitToAPI = (async () => {
    const submit = await fetch( 'localhost:3030/aip/submit', {
        method: 'POST',
        body: RelationFileAndCode (function(response) {
            return (
                <div className='resultOfAPI'>
                    { response }
                </div>
            )
          }, function(error) {
            // エラー内容
          })
    });
    
  })

  return (
    <div className='result'>
      <button className="button" type="submit" onClick={ submitToAPI }>実行</button>
    </div>
  );
}

export default ResultOfCode;
