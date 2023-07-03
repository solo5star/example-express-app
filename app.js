import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(8000, () => {
  console.log("Server is listening on 8000");
});
