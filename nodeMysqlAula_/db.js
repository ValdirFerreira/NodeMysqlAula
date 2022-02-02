const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto','root','1234',
{
    dialect:'mysql', host:'localhost' 
});

module.exports = componenteSequelize;