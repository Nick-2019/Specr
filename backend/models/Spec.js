const Sequelize = require('sequelize')
const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const User = require('./User')




const sequelize = new Sequelize('specr','postgres','abcdef',
{
    dialect: 'postgres',
    host: 'localhost'
})

const Model = Sequelize.Model



class Spec extends Model {}

Spec.init({
    cpuName: STRING,
    cpuTier: INTEGER,
    gpuName: STRING,
    gpuTier: INTEGER,
    ramSize: INTEGER,
    ramUnit: STRING,
    // ramType: STRING,
    // userId: INTEGER
},{
    sequelize,
    modelName: 'spec'
})
// Spec.belongsTo(User, {as: 'specs', foreignKey: 'userId'})
// User.hasMany(Specs, {as: 'specs', onDelete: 'cascade', hooks: true})

module.exports = Spec
sequelize.sync()