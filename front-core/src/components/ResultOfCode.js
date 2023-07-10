import React, { useState, useEffect, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ fileAndCode }) => {
  useEffect(() => {
    console.log(fileAndCode);
  }, [])

return (
  <div>
  </div>
);
});

export default ReturnResult;
