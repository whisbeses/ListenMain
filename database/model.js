const Sequelize = require('sequelize');
const db = require('./postgres');


const Posts = db.postgres.define("Post", {
  text : {
    type : Sequelize.STRING
  },
  user_id : {
    type : Sequelize.INTEGER
  },
  background : {
    type : Sequelize.STRING
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
});

const User = db.postgres.define("User", {
  name :  {
    type : Sequelize.STRING
  },
  password :  {
    type : Sequelize.STRING
  }
})


Posts.belongsTo(User, {foreignKey: "user_id"});


module.exports = {
  Posts,
  User
}