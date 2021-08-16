const express = require ("express")
//requisição HTTPS de forma nativa

const app = express ();
const imported = require ("./src/status.js")

app.get("/status", function (req, res)  {
  res.send(imported.run ())
})

app.listen(3000, function () {
  console.log("Server is running on port 3000.")
})