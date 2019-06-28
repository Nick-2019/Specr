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

class Review extends Model{}

Review.init({
    content: STRING,
    userId: INTEGER,
    computerId:INTEGER
},{
    sequelize,
    modelName: 'review'
})

// Review.belongsTo(User)
// Review.belongsTo(Computer)

module.exports = Review
sequelize.sync()