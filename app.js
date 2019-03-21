const express = require("express");
const app = express();

const router = require(`./router/index`);
const PORT = 3001;

app.use(`/pages`, router);
app.listen(PORT, () => {
  console.log(`ここのコメントは必要なのでしょうか？${PORT}`);
});
