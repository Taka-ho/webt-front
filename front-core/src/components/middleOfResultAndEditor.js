import { useEffect, useState } from "react";

const MiddleOfResultAndEditor = ({ selectedTab, changedContents }) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFileContent, setSelectedFileContent] = useState("");

  useEffect(() => {
    setSelectedFileName(selectedTab);
    setSelectedFileContent(changedContents);
  }, []);

  return [selectedFileName, selectedFileContent];
};

export default MiddleOfResultAndEditor;
