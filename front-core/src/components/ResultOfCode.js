import React, { useEffect, useState, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ selectedFileName, selectedFileContent }) => {
  const [FileAndCode, setRelation] = useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    relationFileAndContent();
  }, [selectedFileName, selectedFileContent]);

  const relationFileAndContent = () => {
    console.log(selectedFileName + ': ' + selectedFileContent);
    if(selectedFileContent) {
      setIsButtonVisible(true);
    }
    setRelation({ ...FileAndCode, [ selectedFileName ]: selectedFileContent });
  };

  const clicked = () => {
    console.log('ボタンがクリックされました');
  }
  return (
    <div className="result">
      {isButtonVisible && (
        <button className="button" type="submit" disabled={ !selectedFileContent }>
          実行
        </button>
      )}
    </div>
  );
});

export default ReturnResult;
