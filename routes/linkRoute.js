
const express = require('express');
var methodOverride = require('method-override')
const router = express.Router();

router.use(methodOverride('_method'));
const linkController = require('../controllers/linkController')

router.get("/", linkController.allLinks)
router.get("/add", (req, res) => { res.render("index", {error: false, body: {} });})
router.get("/:title", linkController.redirect)
router.get("/edit/:id", linkController.loadLink);

router.post("/", express.urlencoded({extended: true}), linkController.addLink)
router.post("/edit/:id", express.urlencoded({extended: true}), linkController.editLink);

router.delete("/:id", linkController.deleteLink)
router.delete("/", express.urlencoded({extended: true}), linkController.deleteLink)


module.exports = router;