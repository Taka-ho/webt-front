import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import '../Exam.css';

const Editor = ({ fileName, fileContent }) => {
  console.log({ fileContent });
  const [fileContents, setFileContent] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      for (let i = 0; i < fileName.length; i++) {
        const fileExtension = fileContents[i].split('.').pop();
        setLanguage(getLanguageMode(fileExtension));
        setFileContent(fileContent);
      }
    };
    
    if (fileContents) {
      fetchFileContent();
    }
  }, [fileContents]);

  const handleEditorChange = (newValue) => {
    // エディタの値が変更された時の処理
    console.log(fileContents);
  };

  const getLanguageMode = (fileExtension) => {
    // 拡張子に基づいて言語モードを返す関数
    switch (fileExtension) {
      case 'js':
        return 'javascript';
      case 'csv':
        return 'csv';
      case 'txt':
        return 'txt';
      // 他の言語モードも必要に応じて追加する
      default:
        return ''; // 不明な拡張子の場合は空の言語モードを返す
    }
  };
  return (
    <div className='editor-space'>
      <MonacoEditor
        language={language} // 言語モードを明示的に指定する
        theme="visual studio"
        value={fileContents}
        encoding="utf-8" // 文字エンコーディングを指定する
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
