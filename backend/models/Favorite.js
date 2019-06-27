const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER




const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})
const Model = Sequelize.Model

class Favorite extends Model{}
Favorite.init({
    userId: INTEGER,
    computerId: INTEGER
},{
    sequelize,
    modelName: "favorite"
})

module.exports = Favorite
sequelize.sync()