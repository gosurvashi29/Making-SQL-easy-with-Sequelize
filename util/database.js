const Sequelize = require('sequelize');

const sequelize = new Sequelize('sharpener','root','admin1234',{
    dialect : 'mysql',
    host : 'localhost'

});

module.exports = sequelize;