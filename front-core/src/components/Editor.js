import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import '../Exam.css';

const Editor = ({ fileName, fileContent }) => {
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      const fileExtension = fileName.split('.').pop();
      setLanguage(getLanguageMode(fileExtension));
      setContent(fileContent);
    };

    if (fileName && fileContent) {
      fetchFileContent();
    }
  }, [fileName, fileContent]);

  const handleEditorChange = () => {
    // エディタの値が変更された時の処理
    fileName = fileContent;
    setContent(fileContent);
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
        language={language}
        theme="visual studio"
        value={content}
        encoding="utf-8"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
