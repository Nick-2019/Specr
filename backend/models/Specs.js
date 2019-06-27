const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const Model = Sequelize.Model
const Sequelize = require('sequelize')
const User = require('./User')




const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})


class Specs extends Model {}

Specs.init({
    CPU:{
        name: STRING,
        tier: INTEGER
    },
    GPU:{
        name: STRING,
        tier: INTEGER
    },
    RAM:{
        amount: INTEGER,
        unit: STRING
    }
},{
    sequelize,
    modelName: 'specs'
})

// Specs.belongsTo(User, {foreignKey: 'userId'})
// User.hasMany(Specs, {as: 'specs', onDelete: 'cascade', hooks: true})

module.exports = Specs
sequelize.sync