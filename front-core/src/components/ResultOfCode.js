import React, { memo } from 'react';
import '../ResultOfCode.css';
import Editor from './Editor';

const ReturnResult = () => {
  const getContent = () => {
    const editor = Editor();
    console.log(editor.fileAndCode);
    return editor.fileAndCode;
  }
};

export default ReturnResult;
