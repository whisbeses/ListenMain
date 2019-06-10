const router = require("express").Router();
const controller = require("./controller");


router.get("/posts", controller.post.readAll);
router.post("/posts",controller.post.create);
router.patch("/posts", controller.post.update);
router.delete("/posts",controller.post.delete);

module.exports = router;