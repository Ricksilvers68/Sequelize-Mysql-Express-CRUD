const User = require("../src/models/User")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

//CRUD

module.exports = {
    index: async (req, res) => {
        const { page = 1 } = req.query
        const { count: total, rows: usuarios } = await User.findAndCountAll({
            limit: 8,
            offset: (page - 1) * 8 //page-1 para iniciar a partir da 1ª página
        })
        let totalPagina = Math.round(total / 8)
        return res.render("usuarios", { usuarios, totalPagina })

    },

    store: async (req, res) => {
        const { name, email, password } = req.body
        const usuarios = await User.create({ name, email, password })
        return res.json(usuarios)

    },

    editForm: async (req,res) => {
const {name, email, password} = req.body
const { id } = req.params
const edit = await User.findByPk(id)
return res.render("updateUser", { edit })
    },

    update: async (req, res) => {
        const { name, email, password } = req.body
        const { id } = req.params
        await User.update({ name, email, password }, {

            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram atualizados com sucesso!" })
    },

    deleteUser: async (req,res) => {
        const {name, email, password} = req.body
        const { id } = req.params
        const edit = await User.findByPk(id)
        return res.render("deleteUser", { edit })
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
        const { page = 1 } = req.query
        const { count: total, rows: usuarios } = await User.findAndCountAll({
            where: {
                name: {
                    [Op.like]: `%${key}%`
                }
            }
        })
        let totalPagina = Math.round(total / 8)
        return res.render("usuarios", { usuarios, totalPagina })
    }
}