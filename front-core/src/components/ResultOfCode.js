import React, { useEffect, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ fileAndCode }) => {
  if (!fileAndCode || Object.keys(fileAndCode).length === 0) {
    console.log('空です。');
  } else {
    console.log(fileAndCode);
  }
  return (
    <div>
      {/* コンポーネントの表示内容 */}
    </div>
  );
});

export default ReturnResult;
