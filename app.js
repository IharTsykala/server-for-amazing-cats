const express = require("express")
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.end(
    `<div><h1>This server was creating for support application: 
    <a href="https://ihartsykala.github.io/large-scale-solutions-ts-react-redux/">"Amazing cats"</a>.
    </h1></div>`
  )
})

app.use(express.static(`${__dirname}/src/public`))

app.listen(port, () => {
  console.log(`server on port ${port}`)
})
