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
      zip.forEach(async (relativePath, zipEntry) => {
        if (!zipEntry.dir) {
          const fileName = relativePath;
          names.push(fileName);
          const content = await zipEntry.async("text");
          fileContents.push(content);
        }
      });
      setContents(fileContents);
      setFileNames(names);
      
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
      {
        contents.map((content, index) => (
            <Editor fileName={fileNames[index]} fileContent={content} />
        ))
      }
    </Tabs>
  </div>
);
};

export default TabComponent;
