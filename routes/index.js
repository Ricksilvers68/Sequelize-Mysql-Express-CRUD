const express = require('express');
const router = express.Router();



const UserController = require("../controllers/userController")



router.get("/usuarios", UserController.index)
router.post("/usuarios", UserController.store)


//Rota para inserir usuário
//router.get("/usuarios", UserController.insert)

//Rota para editar um usuario
router.get("/editar/:id", UserController.editForm)
router.put("/editar/:id", UserController.update)

//rota para selecionar usuário para excluir
router.get("/deletar/:id", UserController.deleteUser)
router.delete("/deletar/:id", UserController.delete)

router.get("/usuarios/search", UserController.search)



module.exports = router;