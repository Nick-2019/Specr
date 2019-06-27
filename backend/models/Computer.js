const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const Model = Sequelize.Model
const BOOLEAN = Sequelize.BOOLEAN
const Sequelize = require('sequelize')
const Recommendation = requre('./Recommendaton')





const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})

class Computer extends Model {}
Computer.init({
    info:{
        name: STRING,
        make: STRING,
        model: STRING,
        OEMURL: STRING,
        os: STRING,
        msrp: INTEGER,
        img: STRING,
        type: STRING,
        size: STRING
    },
    CPU:{
        name: STRING,
        tier: INTEGER
    },
    GPU:{
        name:STRING,
        tier: INTEGER
    },
    RAM:{
        amount: INTEGER,
        unit: STRING,
        type: STRING
    },
    ishidden: BOOLEAN,
    newegg: STRING,
    uploadedby: STRING
},{
    sequelize,
    modelName: 'computer'
})

// Computer.belongsTo(User, {foreignKey: 'userId'})
// User.hasMany(Computer, {as: "computers"})

// Computer.hasMany(Recommendation, {as: 'recommendations'})
// Computer.hasMany(User {through: Recommendation})

module.exports = Computer
sequelize.sync()