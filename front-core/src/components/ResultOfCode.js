import React, { useEffect, useState, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ selectedFileName, selectedFileContent }) => {
  const [FileAndCode, setRelation] = useState({});

  useEffect(() => {
    relationFileAndContent();
  }, [selectedFileName, selectedFileContent]);

  const relationFileAndContent = () => {
    console.log(selectedFileName + ': ' + selectedFileContent);
    setRelation({ ...FileAndCode, [ selectedFileName ]: selectedFileContent });
  };

  console.log('!selectedFileContent: ' + !selectedFileContent);

  return (
    <div className="result">
      {selectedFileContent ? (
        <button className="button">実行する</button>
      ) : (
        <button className="button">実行不可</button>
      )}
    </div>
  );
});

export default ReturnResult;
