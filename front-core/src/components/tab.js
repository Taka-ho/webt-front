import React, { useEffect, useState } from 'react';
import '../Tab.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JSZip from 'jszip';
import Editor from './Editor';

const TabComponent = () => {
  const [fileNames, setFileNames] = useState([]);
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const download = async () => {
      const response = await fetch('http://localhost:8000/api/exam/workBook');
      const zipFileData = await response.blob();
      const zip = await JSZip.loadAsync(zipFileData);

      const names = [];
      const fileContents = [];
      for (const [relativePath, zipEntry] of Object.entries(zip.files)) {
        if (!zipEntry.dir) {
        const fileName = relativePath;
        names.push(fileName);
        const content = await zipEntry.async('text');
        fileContents.push(content);
        }
      }
      setFileNames(names);
      setContents(fileContents);
    };
    download();
  }, []);
  
  return (
    <div className='tab-space'>
      <Tabs>
        <TabList>
          {fileNames.map((fileName, index) => (
            <Tab key={fileName}>{fileName}</Tab>
            
          ))}
        </TabList>
        <TabPanel>
          {
            fileNames.map((fileName, index) => (
              <Editor key={fileName} fileName={fileName} fileContent={contents[index]} />
            ))
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
