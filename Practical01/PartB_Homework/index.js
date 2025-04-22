const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from ABC Express!");
});

app.get("/intro", (req, res) => {
    res.send("My name is Muhammad Amsyar Bin Rahmat, I love cats.");
});

app.get("/name", (req, res) => {
    res.send("My name is Muhammad Amsyar Bin Rahmat.");
});

app.get("/hobbies", (req, res) => {
    res.send("My favourite hobby is to workout at the Gym.");
});

app.get("/food", (req, res) => {
    res.send("I love eating chicken.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
