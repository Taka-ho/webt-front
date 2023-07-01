import React, { useEffect, useState } from 'react';
import '../ResultOfCode.css';

const ReturnResult = ({
  fileNames,
  fileContents,
  selectedFileName,
  selectedFileContent,
}) => {
  useEffect(() => {
    console.log('Selected File Name:', selectedFileName);
    console.log('Selected File Content:', selectedFileContent);
  }, [selectedFileName, selectedFileContent]);

/*   const handleExecuteCode = () => {
    // 実行ボタンがクリックされたときの処理
    // 選択されたファイル名とコンテンツを使用してAPIにデータを送信するなどの操作を行います
    console.log('実行ボタンがクリックされました');
    console.log('選択されたファイル名:', selectedFileName);
    console.log('選択されたファイルコンテンツ:', selectedFileContent);
  }; */

  return (
    <div className="result">
      <button className="button" type="submit">
        実行
      </button>
    </div>
  );
};

export default ReturnResult;
