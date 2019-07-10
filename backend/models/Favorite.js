const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const Computer = require('./Computer')
const User = require('./User')




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

// Favorite.belongsTo(User)
// Favorite.belongsTo(Computer)
// Computer.belongsToMany(User, {through: Favorite })
// User.belongsToMany(Computer, {through: Favorite })

module.exports = Favorite
sequelize.sync()