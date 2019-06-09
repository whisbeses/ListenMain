const Sequelize = require('sequelize');
const pg= require("pg");
const login = require("./login");

console.log(login);
let postgres = new Sequelize("reviews", login.user, login.password, {
  dialect: 'postgres',
  host: '54.153.70.205',
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