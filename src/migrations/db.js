const Sequelize = require('sequelize');

const sequelize = new Sequelize('bdreciclense', 'root', 'lavajatoficr', {
    host: '34.95.148.80',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }).catch(() => {
        console.log("Erro: Conexão com o banco de dados não foi realizada com sucesso!");
    });

module.exports = sequelize;