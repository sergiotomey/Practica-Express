const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>whats p?</h1>");
});
app.listen(5000, () => console.log("Server open on port 5000"));
