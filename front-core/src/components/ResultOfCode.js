// 子コンポーネント(ResultOfCode.js)
import React, { useEffect, memo, useState } from 'react';
import '../ResultOfCode.css';

const ResultOfCode = memo(({ answerOfUser, clickCountOfButton, updateState }) => {
  const [returnData, setReturnData] = useState(['', '']);

  useEffect(() => {
    if (!answerOfUser || Object.keys(answerOfUser).length === 0) {
      return;
    } else {


      const postAPI = async () => {
        try {
          const response = await fetch('http://localhost:3030/api/ReturnResult', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // リクエストヘッダーにJSONデータを指定
            },
            body: JSON.stringify(answerOfUser),
          });

          // レスポンスのステータスコードを確認
          if (response.ok) {
            const data = await response.json();
            setReturnData(data[0]);
            updateState(data[1]);
          } else {
            console.log('data:', await response.json());
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const processUserAnswer = async () => {
        await postAPI();
      };
      processUserAnswer();
    }
  }, [answerOfUser, clickCountOfButton]); // clickCountOfButtonを依存配列に追加

  return (
    <div id="showResult" style={{ whiteSpace: 'pre-wrap' }}>
      <ul className="terminal-result-window">
        <li className="terminal-title">実行結果</li>
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
