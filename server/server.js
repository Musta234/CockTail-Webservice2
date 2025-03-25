const express = require("express")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
const httpserver = http.createServer(app)
const server = new Server(httpserver, {cors: {
    origin: "*",
    methods : ["GET", "POST"]
}})

app.use(express.static("../static"))

const port = process.env.PORT || 3000

app.get("/", (req,res) =>{
    res.SemdFile(__dirname +"../static/index.html" )
})

app.listen(port, () => {
    console.log("Example app listening on port" +port)
})

