import { useState, useEffect } from 'react';
import { Treebeard } from 'react-treebeard';
import JSZip from 'jszip';
import '../FileTree.css';
const FileTree = () => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const downloadUrl = 'http://localhost:8000/api/exam/workBook';

    const downloadFile = async () => {
      try {
        const response = await fetch(downloadUrl, {
          'Access-Control-Allow-Origin': '*'
        });
        const blob = await response.blob();

        // ダウンロードしたファイルの処理を行う
        handleDownloadedFile(blob);
      } catch (error) {
        console.error('Failed to download the file', error);
      }
    };

    const handleDownloadedFile = async (blob) => {
      try {
        const zip = new JSZip();
        const directory = await zip.loadAsync(blob);
        // ファイルの処理
        setTreeData(directory);
        console.log(directory);
      } catch (error) {
        console.error('Failed to process the downloaded file', error);
      }
    };

    downloadFile();
  }, []);

  const onToggle = (node, toggled) => {
    if (node.children) {
      node.toggled = toggled;
    }

    setTreeData({ ...treeData });
  };

  return treeData ? <Treebeard data={treeData} onToggle={onToggle} /> : null;
}

export default FileTree;
