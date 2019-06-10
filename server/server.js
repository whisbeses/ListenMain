const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");

const db = require("../database/postgres");
const server = express();

const port = process.env.PORT || 3000;

server.use("/", express.static(path.join(__dirname, "../public")))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

server.use("/api", router);


server.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})