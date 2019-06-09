const router = require("express").Router();
const controller = require("./controller");


router.get("/posts", controller.post.readAll);



module.exports = router;