const Sequelize = require('sequelize')
const INTEGER = Sequelize.INTEGER
const User = require('./User')
const Computer = require('./Computer')



const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})


const Model = Sequelize.Model

class Recommendation extends Model{}

Recommendation.init({
    userId: INTEGER,
    computerId: INTEGER
},{
    sequelize,
    modelName: 'recommendation'
})

// Recommendation.belongsTo(User)
// Recommendation.belongsTo(Computer)

module.exports = Recommendation
sequelize.sync()



// While this particular model WILL only consist of foregn keys, we are disabling relationships for the time being 
// Recommendation.belongsTo(User, {foreignKey: 'userId'})
// Recommendation.belongsTo(Computer, {foreignKey: 'computerId'})