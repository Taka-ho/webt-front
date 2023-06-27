import React, { useState, useEffect } from 'react';
import '../ResultOfCode.css';
import MiddleOfResultAndEditor from './middleOfResultAndEditor';

const ResultOfCode = ({ fileName, fileContent }) => {
    const [selectedFileNames, setSelectedFileName] = useState([]);
    const [selectedFileContents, setSelectedFileContent] = useState([]);

        useEffect(() => {
        console.log(fileContent);
        setSelectedFileName(fileName);
        setSelectedFileContent(fileContent);
        console.log(selectedFileNames);
    }, [fileName, fileContent]);

    return (
        <div className='result'>
            <button className="button" role="button">実行</button>
            <div className='valueOfTab'>
            </div>
            {/* 他のコンテンツの表示など */}
        </div>
    );
}


export default ResultOfCode;
