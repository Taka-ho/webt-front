import { useEffect, useState } from "react";
import ResultOfCode from "./ResultOfCode";

const MiddleOfResultAndEditor = ({ fileNames, fileContents, arrayOfFiles }) => {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFileContent, setSelectedFileContent] = useState("");
    const [filesInArray, setArrayOfFiles] = useState({});
    useEffect(() => {
        setSelectedFileName(fileNames);
        setSelectedFileContent(fileContents);
        setArrayOfFiles(arrayOfFiles);
    }, [fileNames, fileContents]);
    
    console.log(filesInArray);
    return <ResultOfCode fileName={ selectedFileName } fileContent={ selectedFileContent } arrayOfFiles={ filesInArray } />;
        
};

export default MiddleOfResultAndEditor;
