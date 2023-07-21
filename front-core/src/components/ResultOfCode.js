import React, { useEffect, memo, useState } from 'react';
import '../ResultOfCode.css';
import DisplayResult from './DisplayOfResult';

const ResultOfCode = memo(({ answerOfUser }) => {
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    if (!answerOfUser || Object.keys(answerOfUser).length === 0) {
      return;
    } else {
      const fileName = answerOfUser.fileName;
      let fileContent = answerOfUser.content;
      // 余分な2行以上の空行を削除
      const removeExtraLines = async () => {
        new Promise((resolve) => {
          removeExtraEmptyLines(fileContent);
          resolve();
        });
      }

      // ここで fileName の値を利用できます

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
            setResultData(data);
          } else {
            console.log("data:", await response.json());
          }
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
        await postAPI();
      };

      processUserAnswer();
    }
  }, [answerOfUser, resultData]);

  return (
    <div>
      {resultData && <DisplayResult arrayOfResults={resultData} />}
    </div>
  );
});

export default ResultOfCode;
