const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const BOOLEAN = Sequelize.BOOLEAN
// const Recommendation = require('./Recommendaton')





const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})
const Model = Sequelize.Model

class Computer extends Model {}
Computer.init({
        name: STRING,
        make: STRING,
        model: STRING,
        OEMURL: STRING,
        os: STRING,
        msrp: INTEGER,
        img: STRING,
        type: STRING,
        size: STRING,
        cpuName: STRING,
        gpuName: STRING,
        cpuTier: INTEGER,
        gpuTier: INTEGER,
        ramAmount: INTEGER,
        ramUnit: STRING,
        ramType: STRING,
        ishidden: BOOLEAN,
        newegg: STRING,
        uploadedby: STRING
    // info:{
    //     name: STRING,
    //     make: STRING,
    //     model: STRING,
    //     OEMURL: STRING,
    //     os: STRING,
    //     msrp: INTEGER,
    //     img: STRING,
    //     type: STRING,
    //     size: STRING,
    //     cpu:{
    //         name: STRING,
    //         tier: INTEGER
    //     },
    //     gpu:{
    //         name:STRING,
    //         tier: INTEGER
    //     },
    //     ram:{
    //         amount: INTEGER,
    //         unit: STRING,
    //         type: STRING
    //     },
    // },
    // CPUs:{
    //     name: STRING,
    //     tier: INTEGER
    // },
    // GPU:{
    //     name:STRING,
    //     tier: INTEGER
    // },
    // RAM:{
    //     amount: INTEGER,
    //     unit: STRING,
    //     type: STRING
    // },

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