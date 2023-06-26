import React, { useState } from 'react';
import '../ResultOfCode.css';
import MiddleOfResultAndEditor from './middleOfResultAndEditor';

const ResultOfCode = () => {
  const newValues = () => {
    MiddleOfResultAndEditor();
  };

  return (
    <div className='result'>
      <button className="button" role="button" onClick={ newValues }>実行</button>
    </div>
  );
};

export default ResultOfCode;
