const express = require('express');
const router = express.Router();



const UserController = require("../controllers/userController")




router.post("/usuarios", UserController.store)
router.get("/usuarios", UserController.index)
router.put("/usuarios/:id", UserController.update)
router.delete("/usuarios/:id", UserController.delete)



module.exports = router;