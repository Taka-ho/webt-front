import React, { useCallback, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JSZip from 'jszip';
import MonacoEditor from 'react-monaco-editor';
import '../Tab.css';
import '../Exam.css';
import '../Editor.css';
import ResultOfCode from './ResultOfCode';

const Editor = () => {
  const [fileNames, setFileNames] = useState([]);
  const [fileContents, setFileContents] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [answerOfUser, setAnswerOfUser] = useState([]);
  const [executionCompleted, setExecutionCompleted] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/exam/workBook');
      const zipFileData = await response.blob();
      const zip = await JSZip.loadAsync(zipFileData);
      const names = [];
      const contents = [];

      await Promise.all(
        Object.entries(zip.files).map(async ([relativePath, zipEntry]) => {
          if (!zipEntry.dir) {
            const nameWithRelativePath = relativePath;
            const fileName = nameWithRelativePath.replace('exam/', '');
            const content = await zipEntry.async('text');
            names.push(fileName);
            contents.push({ fileName, content });
          }
        })
      );

      setFileNames(names);
      setFileContents(contents);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (executionCompleted) {
      setExecutionCompleted(true);
    }
  }, [executionCompleted]);

  const handleOnChange = (newValue, index) => {
    const updatedContents = fileContents.map((item, i) =>
      i === index ? { ...item, content: newValue } : item
    );

    setFileContents(updatedContents);
  };

  const handleExecuteCode = useCallback(() => {
    const answer = {
      fileName: fileContents.map((item) => item.fileName),
      content: fileContents.map((item) => item.content),
    };
    setClickCount(clickCount + 1)
    setAnswerOfUser(answer);
  }, [fileContents]);

  const handleTabSelect = (selectedIndex) => {
    const fileName = fileNames[selectedIndex];
    setSelectedFileName(fileName);
  };

  return (
    <div style={{ display: 'flex' }}>
    <div style={{ flex: 1 }}>
      <Tabs onSelect={handleTabSelect}>
        <TabList>
          {fileNames.map((fileName, index) => (
            <Tab key={fileName}>{fileName}</Tab>
          ))}
        </TabList>
        {fileContents.map((item, index) => (
          <TabPanel key={item.fileName} value={selectedFileName}>
            <div className="editor-space">
              <MonacoEditor
                language="javascript"
                theme="vs"
                value={item.content}
                onChange={(newValue) => handleOnChange(newValue, index)}
              />
            </div>
          </TabPanel>
        ))}
      </Tabs>
      <button className="button" type="submit" onClick={handleExecuteCode}>
        実行する
      </button>
      </div>
      <div style={{ flex: 1, marginLeft: '5%' }}>
        <ResultOfCode answerOfUser={answerOfUser} clickCountOfButton={clickCount} />
      </div>
    </div>
  );
};

export default Editor;
