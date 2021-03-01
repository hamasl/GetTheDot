const express = require('express');
const app = express()
app.use(express.static(__dirname))
const PORT = '8080'

app.get("/", (req, res) => {
  res.sendFile("html/index.html", { root: __dirname })
})

app.listen(PORT, () => console.log("Server started running started running"))
