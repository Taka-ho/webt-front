// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const { directory, code } = req.body;
  
  // コマンドを実行して結果を取得します
  exec('node' + fileName, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.json({ result: stdout });
    }
  });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
