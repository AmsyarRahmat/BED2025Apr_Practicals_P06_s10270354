const express = require("express");
const app = express();
const PORT = 3000;

app.get("/abc", (req, res) => {
  res.send("Hello from ABC Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});