import React, { useEffect } from 'react';
import '../ResultOfCode.css';

const CodeResult = ({ fileName, fileContent }) => {
  useEffect(() => {
    if (fileName && fileContent) {
      console.log(fileName);
      console.log(fileContent);
    }
  }, [fileName, fileContent]);

  return (
    <div className="result-container">
      <div className="code-container">{/* 結果を表示する部分のコードを追加してください */}</div>
    </div>
  );
};

const ResultOfCode = ({ fileName, fileContent }) => {
  return (
    <div>
      <CodeResult fileName={fileName} fileContent={fileContent} />
      <button className='button'>実行</button>
    </div>
  );
};

export default ResultOfCode;
