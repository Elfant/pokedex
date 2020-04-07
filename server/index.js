const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const joinData = require("./utilities/joinData");

const port = process.env.PORT || 8000;

const app = express();

const publicDirectoryPath = path.join(__dirname, "../build");

app.use(express.static(publicDirectoryPath));

app.get("/pokemons", (req, resp) => {
  
  console.log(req.query.nexturl) 

  joinData(req.query.nexturl)
    .then(pokemons => {
      resp.send(
        {
          pokemons
        }
      )
    })
})

app.get("*", (req, resp) => {
  resp.sendFile(publicDirectoryPath)
})

app.listen(port, () => 
  console.log(`Server is up on ${port}`)
)
