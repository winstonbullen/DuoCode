import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('Hello DuoCode!');
});

app.listen(port, () => {
  console.log(`DuoCode server listening on port ${port}...`)
});
