import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JSZip from 'jszip';
import MonacoEditor from 'react-monaco-editor';
import '../Tab.css';
import '../Exam.css';
import '../Editor.css';
import ReturnResult from './ResultOfCode';

const Editor = () => {
  const [fileNames, setFileNames] = useState([]);
  const [fileContents, setFileContents] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [fileAndCode, relationFileAndCode] = useState({});
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
            const fileName = relativePath;
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

  const handleOnChange = (newValue, index) => {
    const updatedContents = fileContents.map((item, i) =>
      i === index ? { ...item, content: newValue } : item
    );

    relationFileAndCode({...fileAndCode, [selectedFileName]: updatedContents});
    console.log(updatedContents);
  };

  const handleExecuteCode = () => {
    <ReturnResult usersCode={ fileAndCode } />
    
  };

  const handleTabSelect = (selectedIndex) => {
    const fileName = fileNames[selectedIndex];
    setSelectedFileName(fileName);
  };

  return (
    <div>
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
      <button className="button" type='submit' onClick={handleExecuteCode}>
        実行する
      </button>
    </div>
  );
};

export default Editor;
