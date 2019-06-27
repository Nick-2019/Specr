const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const Model = Sequelize.Model




const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})

class Favorite extends Model{}
Favorite.init({
    userId: INTEGER,
    computerId: INTEGER
},{
    sequelize,
    modelName: Favorite
})