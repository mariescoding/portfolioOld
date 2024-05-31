/* eslint-disable no-unused-vars */

 

const express = require("express");
var path = require('path');
const app = express();
const port = 3400;

app.get("/", (req, res) => {
  res.sendFile('index.html',{ root : './'});

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
