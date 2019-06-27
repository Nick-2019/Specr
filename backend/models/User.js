const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const BOOLEAN = Sequelize.BOOLEAN

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


module.exports = User
sequelize.sync
