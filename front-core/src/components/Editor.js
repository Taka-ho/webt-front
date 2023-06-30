import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JSZip from 'jszip';
import MonacoEditor from 'react-monaco-editor';
import MiddleOfResultAndEditor from './MiddleOfResultAndEditor';
import '../Tab.css';
import '../Exam.css';
import '../Editor.css';

const Editor = () => {
  const [fileNames, setFileNames] = useState([]);
  const [fileContents, setFileContents] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileContent, setSelectedFileContent] = useState('');

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
            contents.push(content);
          }
        })
      );

      setFileNames(names);
      setFileContents(contents);
    };

    fetchData();
  }, []);

  const handleOnChange = (newValue) => {
    setSelectedFileContent(newValue);
  };

  const handleExecuteCode = () => {
    // ResultOfCodeコンポーネントに選択されたファイル名とコンテンツを渡す
    if (selectedFileName && selectedFileContent) {
      return (
        <MiddleOfResultAndEditor
          fileNames={selectedFileName}
          fileContents={selectedFileContent}
          arrayOfFiles={fileNames}
        />
      );
    }
  };

  const handleTabSelect = () => {
    setSelectedFileName(fileNames);
    setSelectedFileContent(fileContents);
  };

  return (
    <div>
      <Tabs onSelect={handleTabSelect}>
        <TabList>
          {fileNames.map((fileName, index) => (
            <Tab key={fileName[index]}>{fileName}</Tab>
          ))}
        </TabList>
        {fileContents.map((content, index) => (
          <TabPanel key={fileNames[index]}>
            <div className="editor-space">
              <MonacoEditor
                language="javascript"
                theme="vs"
                value={content}
                onChange={handleOnChange}
              />
            </div>
          </TabPanel>
        ))}
      </Tabs>
      {handleExecuteCode()}
    </div>
    
  );
};

export default Editor;
