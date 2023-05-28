//Configurações
const express = require('express');
const app = express();
// const path = require('path');
// const router = express.Router();
//const cookieParser = require('cooki-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.eventNames.PORT || 5500;

//Importação das Tabelas
const models = require('./src/models/models');

//Importação das rotas
const rotas = require('./src/routes/routes');

//Configurações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "/")));

app.get('/', function (req, res) {

    return res.json('Hello World');
    // res.sendFile(path.join(__dirname + '/index.html'));

});

//app.use('/', router);
app.use(rotas);
app.use(cors());
//app.use(cookieParser());
app.use(express.json());
//app.listen(process.env.port || 5500);
