import React, { useEffect, memo, useState, useRef } from 'react';
import '../ResultOfCode.css';
import JSZip from 'jszip';
const ResultOfCode = memo(({ answerOfUser, clickCountOfButton }) => {
  const [returnData, setReturnData] = useState(['', '']);
  const [zipFileData, setZipFileData] = useState('');
  const [count, setCount] = useState(1);
  const [countButtonClick, setCountButtonClick] = useState(1);
  // リクエストが既に行われたかを示すフラグ
  const requestSentRef = useRef(false);

  useEffect(() => {
    if (!answerOfUser || Object.keys(answerOfUser).length === 0) {
      return;
    } else {
      const fileName = answerOfUser.fileName;
      let fileContent = answerOfUser.content;

      const removeExtraLines = async () => {
        new Promise((resolve) => {
          removeExtraEmptyLines(fileContent);
          resolve();
        });
      }

      const postAPI = async () => {
        try {
          const response = await fetch("http://localhost:3030/api/ReturnResult", {
            method: "POST",
            headers: {
              "Content-Type": "application/json" // リクエストヘッダーにJSONデータを指定
            },
            body: JSON.stringify(answerOfUser)
          });
      
          // レスポンスのステータスコードを確認
          if (response.ok) {
            const data = await response.json();
            setReturnData(data[0]);
            setZipFileData(data[1]);
          } else {
            console.log("data:", await response.json());
          }
 
          // リクエストが既に行われたことを示すフラグをtrueに設定
          requestSentRef.current = true;
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const removeExtraEmptyLines = async (fileContent) => {
        const regex = /[\r\n]{3,}/g;
        for(let i = 0; i < fileContent.length; i++) {
          fileContent[i] = fileContent[i].replaceAll(regex, '');
        }
      }

      const processUserAnswer = async () => {
        await removeExtraLines();
        // リクエストがまだ行われていない場合のみAPIリクエストを行う
        if (!requestSentRef.current && count === countButtonClick) {
          await postAPI();
        }
      };
      setCount(count + 1);
      setCountButtonClick(countButtonClick + 1);
      requestSentRef.current = false;
      processUserAnswer();
    }
    
  }, [answerOfUser, clickCountOfButton]); // clickCountOfButtonを依存配列に追加

  return (
    <div id='showResult' style={{ whiteSpace: 'pre-wrap' }}>
      <ul className='terminal-result-window'>
        <li className='terminal-title'>実行結果</li>
      </ul>
      <div>
        {returnData.map((line, index) => (
          <React.Fragment key={index}>
            <br />
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export default ResultOfCode;