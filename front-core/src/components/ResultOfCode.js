import React, { memo, useEffect } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ selectedFileContent }) => {
//  console.log(FileAndContent);

const returnButton = (selectedFileContent) => {
    if(!selectedFileContent){
      return <button className='button'>実行不可</button>
    } else {
      return <button className='button'>実行可能</button>
    }
  }
  
  return (
    <div className="result">
      {returnButton(selectedFileContent)}
    </div>
  );
});

export default ReturnResult;
