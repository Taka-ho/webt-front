import { useEffect, useState } from "react";
import ResultOfCode from "./ResultOfCode";

const MiddleOfResultAndEditor = ({ fileNames, fileContents }) => {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFileContent, setSelectedFileContent] = useState("");

    useEffect(() => {
        setSelectedFileName(fileNames);
        setSelectedFileContent(fileContents);
    }, [fileNames, fileContents]);

    return <ResultOfCode fileName={selectedFileName} fileContent={selectedFileContent} />
        
};

export default MiddleOfResultAndEditor;