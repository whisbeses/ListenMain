const pg= require("pg");
const Sequelize = require('sequelize');
const login = require("./login");



let postgres = new Sequelize("post", login.user, login.password, {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

postgres
  .authenticate()
  .then(()=>{
    console.log("Connect with Postgres made")
  })
  .catch ((err)=>{
    console.log("Unable to connect to Postgres", err)
  })

module.exports.postgres = postgres;