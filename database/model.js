const Sequelize = require('sequelize');
const db = require('./postgres');

const Posts = db.postgres.define("post", {
  text : {
    type : Sequelize.STRING
  },
  background : {
    type : Sequelize.STRING,
    validate : {
      isIn: [["gradient", "picture"]]
    }
  },
  background_value : {
    type : Sequelize.STRING
  },
  likes : {
    type : Sequelize.INTEGER
  },
  helpful : {
    type : Sequelize.INTEGER
  },
  notHelpful : {
    type : Sequelize.INTEGER
  }
},{
  timestamps :false,
});

db.postgres.sync();


module.exports = {
  Posts
}