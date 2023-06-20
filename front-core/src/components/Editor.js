import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import '../Exam.css';
const Editor = () => {
  const handleEditorChange = (newValue) => {
    // エディタの値が変更された時の処理
  };

  return (
    <div className="all-space">
      <h2 className='title'>Monaco Editor</h2>
        <div className='editor-space'>
          <MonacoEditor
            language="javascript"
            theme="visual studio"
            value="console.log('Hello World');"
            onChange={handleEditorChange}
          />
        </div>
    </div>
  );
};

export default Editor;
