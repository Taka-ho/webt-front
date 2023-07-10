import React, { useState, useEffect, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ fileAndCode }) => {
return (
  <div>
    <h1>{fileAndCode && Object.keys(fileAndCode).length !== 0 ? JSON.stringify(fileAndCode) : '空です'}</h1>
  </div>
);
});

export default ReturnResult;
