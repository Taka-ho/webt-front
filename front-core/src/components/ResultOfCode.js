import React, { useState, useEffect, memo } from 'react';
import '../ResultOfCode.css';

const ReturnResult = memo(({ answerOfUser }) => {

  useEffect(() => {
    if (!answerOfUser || Object.keys(answerOfUser).length === 0) {
      console.log('空です');
    } else {
      const fileName = answerOfUser.fileName;
      let fileContent = answerOfUser.content;
      // 余分な2行以上の空行を削除
      fileContent = removeExtraEmptyLines(fileContent);

      // ここで fileName の値を利用できます
      console.log(fileName);
      console.log(fileContent);

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
            const data = await response.json(); // レスポンスのボディをJSONとしてパース
            console.log(data); // レスポンスデータを表示
          } else {
            console.log("Request failed with status:", response.status);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      function removeExtraEmptyLines(fileContent) {
        const regex = /[\r\n]{3,}/g; // 2行以上の連続した改行コードの正規表現
        return fileContent.map(content => content.replace(regex, "\n\n"));
      }
      
      postAPI();
    }
  }, [answerOfUser]);

  return (
    <div>
      {/* レンダリング内容 */}
    </div>
  );
});

export default ReturnResult;
