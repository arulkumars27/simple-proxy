const express = require('express')
const app = express()
const port = 3000;

var proxy = require('express-http-proxy');

app.use(proxy(""));

app.listen(port, () => {
  console.log(`simple-proxy app listening on port ${port}`);
})
