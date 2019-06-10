const Models = require("../database/model");

module.exports = {
  post : {
    readAll : (req,res)=>{
      Models.Posts.findAll({})
        .then((posts)=>{
          res.send(posts);
        })
        .catch(err=> res.send(err))
    },
    create : (req,res)=>{
      Models.Posts.create({
        text : req.body.text,
        background : req.body.background,
        background_value : req.body.background_value,
        likes : req.body.likes,
        helpful : req.body.helpful,
        notHelpful : req.body.notHelpful
      })
      .then((result)=>{
        res.send(JSON.stringify(result.id));
      })
      .catch((err)=> {
        console.log("Err")
        res.send(err)
      })
    },
    update : (req, res) => {
      console
      Models.Posts.update({
        text : req.body.text,
        background : req.body.background,
        background_value : req.body.background_value,
        likes : req.body.likes,
        helpful : req.body.helpful,
        notHelpful : req.body.notHelpful
      }, {where : {id : req.body.id}})
        .then(()=>{
          res.send("Post Updated")
        })
        .catch(()=>{
          res.send("Err",err);
        })
    },
    delete : (req, res)=>{
      console.log(req.body.id)
      Models.Posts.destroy({where : {id : req.body.id}})
        .then(()=>{
          res.send("Post Deleted")
        })
        .catch(()=>{
          res.send("Err",err);
        })
    }
  }
}

// router.patch("/posts", controller.post.update);
// router.delete("posts",controller.post.delete);