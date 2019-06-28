const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const BOOLEAN = Sequelize.BOOLEAN
const Spec = require('./Spec')
const Recommendation = require('./Recommendation')
const Review = require('./Review')
const Favorite = require('./Favorite')

const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})


const Model = Sequelize.Model


class User extends Model {}

User.init({
    username: STRING,
    name: STRING,
    passwordhash: STRING,
    isverified: BOOLEAN,
    isadmin: BOOLEAN
},{
    sequelize,
    modelName: 'user'
})

User.hasMany(Spec, {as: 'specs', foreignKey:'userId', onDelete: 'cascade', hooks: true})
User.hasMany(Favorite, {as: 'favorites', foreignKey:'userId', onDelete: 'cascade', hooks:true})
User.hasMany(Review, {as: 'reviews', foreignKey:'userId'})
User.hasMany(Recommendation, {as: 'recommendation', foreignKey:'userId', onDelete: 'cascade', hooks: true})

module.exports = User
sequelize.sync()
