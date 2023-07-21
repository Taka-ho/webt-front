import React, { useEffect } from 'react';

const DisplayResult = ({ arrayOfResults }) => {

  useEffect(() => {
    console.log(arrayOfResults);
  });

  return (
    <div>
      {Array.isArray(arrayOfResults) ? (
        <ul>
          {arrayOfResults.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <h1>{JSON.stringify(arrayOfResults)}</h1>
      )}
    </div>
  );
}

export default DisplayResult;
