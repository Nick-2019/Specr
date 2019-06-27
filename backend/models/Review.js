const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const Model = Sequelize.Model




const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})

class Review extends Model{}

Review.init({
    content: STRING,
    userId: INTEGER,
    computerId:INTEGER
},{
    sequelize,
    modelName: 'Review'
})

module.exports = Review
sequelize.sync()