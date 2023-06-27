import { useEffect, useState } from "react";

const MiddleOfResultAndEditor = ({ fileNames, fileContents }) => {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFileContent, setSelectedFileContent] = useState("");

    useEffect(() => {
        setSelectedFileName(fileNames);
        setSelectedFileContent(fileContents);
    }, [selectedFileName, selectedFileContent]);
};

export default MiddleOfResultAndEditor;
