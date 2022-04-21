const User = require("../src/models/User")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
//CRUD

module.exports = {
    index: async (req, res) => {
        const usuarios = await User.findAll()

        return res.render("usuarios", { usuarios })

    },

    store: async (req, res) => {
        const { name, email } = req.body
        const usuarios = await User.create({ name, email })
        return res.json(usuarios)

    },

    update: async (req, res) => {
        const { name, email } = req.body
        const { id } = req.params
        await User.update({ name, email }, {

            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram atualizados com sucesso!" })
    },

    delete: async (req, res) => {
        const { id } = req.params
       await User.destroy({
            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram deletados" })
    },

    search: async (req, res) => {
        const { key } = req.query
         const usuarios = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${key}%`
                }
            }
        })

        return res.render("usuarios", { usuarios })

    }
}

