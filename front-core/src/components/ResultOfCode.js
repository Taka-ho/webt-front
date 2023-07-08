import React, { useEffect, memo, useCallback } from 'react';
import '../ReturnResult.css';

const ReturnResult = memo(({ fileAndCode }) => {
  useEffect(() => {
    console.log(fileAndCode);
  }, []);
});

export default ReturnResult;
