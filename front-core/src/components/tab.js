import React from 'react';
import FileTree from './fileTree.js'; // FileTreeコンポーネントのパスを適切に指定してください
import '../Tab.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const TabbedContent = ({ fileData }) => {
  const processFileData = () => {
    if (fileData) {
      return fileData.map((file, index) => (
        <div key={index}>{file.path}</div>
      ));
    }
    return null;
  };

  return (
    <div className='tab'>
      <div className='tab-child'>
        {processFileData()}
      </div>
    </div>
  );
};

const TabComponent = () => {
  const [fileData, setFileData] = React.useState(null);

  const handleFileData = (data) => {
    return setFileData(data);
  };

  return (
      <Tabs>
        <TabList>
          <FileTree onFileData={handleFileData} />
          <TabbedContent fileData={fileData} />
        </TabList>
      </Tabs>
  );
};

export default Tab;