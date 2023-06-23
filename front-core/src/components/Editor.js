import React, { useEffect, useState } from 'react';
import '../Tab.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JSZip from 'jszip';
import MonacoEditor from 'react-monaco-editor';
import '../Exam.css';
const Editor = () => {
  const [fileNames, setFileNames] = useState([]);
  const [fileContents, setFileContents] = useState([]);

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

  return (    
    <Tabs>
      <TabList>
        {fileNames.map((fileName) => (
          <Tab key={fileName}>{fileName}</Tab>
        ))}
      </TabList>
      {fileContents.map((content, index) => (
        <TabPanel key={fileNames[index]}>
          <div className='editor-space'>
            <MonacoEditor
              language="plaintext"
              theme="visual studio"
              value={content}
            />
          </div>

        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Editor;
