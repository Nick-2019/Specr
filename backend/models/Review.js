const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER




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

module.exports = Review
sequelize.sync()