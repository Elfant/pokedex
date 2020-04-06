const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;

const app = express();

const publicDirectoryPath = path.join(__dirname, "../build");

app.use(express.static(publicDirectoryPath));

app.get("*", (req, resp) => {
  resp.sendFile(publicDirectoryPath)
})

app.listen(port, () => 
  console.log(`Server is up on ${port}`)
)
