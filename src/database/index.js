const Sequelize = require("sequelize")
const dbConfig = require("../config/database.js")
const User = require("../models/User")


const connection = new Sequelize(dbConfig)

//try{
//connection.authenticate()
//console.log("Sucesso  na conexão com BD!!!")
//}catch(erro){
//console.log("Não foi possível a conexão", erro)
//}



User.init(connection)



module.exports = connection