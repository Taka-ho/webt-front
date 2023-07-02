import React, {useEffect, useState, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ selectedFileName, selectedFileContent }) => {
    const [FileAndCode, setRelation] = useState({});

    useEffect(() => {
      console.log('Selected File Name:', selectedFileName);
      console.log('Selected File Content:', selectedFileContent);
    }, [selectedFileName, selectedFileContent]);

    const relationFileAndContent = () => {
        setRelation({...FileAndCode, [selectedFileName]: selectedFileContent});
      };

      useEffect(() => {
        relationFileAndContent();
      }, [selectedFileName, selectedFileContent]);
      console.log(FileAndCode);
    return (
    <div className="result">
        <button className="button" type="submit">
        実行
        </button>
    </div>
    );
    });

export default ReturnResult;
