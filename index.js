const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/profile', (req, res) => {
    res.send("<h1>Tusar</h1>")
})

app.listen(port, () => {
  console.log(`Listening Successfull: ${port}`);
});
