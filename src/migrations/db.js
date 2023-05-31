const Sequelize = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'v29XL21py7QduZMXLhRu', {
    host: 'containers-us-west-169.railway.app',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }).catch((error) => {
        console.log("Conexão com o banco de dados não foi realizada com sucesso! Erro: " + error);
    });

module.exports = sequelize;