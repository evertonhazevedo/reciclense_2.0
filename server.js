//Configurações
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//const cookieParser = require('cooki-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importação das Tabelas
const models = require('./src/models/models');

//Importação das rotas
const rotas = require('./src/routes/routes');

var port = process.env.PORT || 5500;

//Configurações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/")));

router.get('/', function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'https://reciclense.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.sendFile(path.join(__dirname + '/index.html'));

});

app.use('/', router);
app.use(rotas);
app.use(cors());
//app.use(cookieParser());
app.use(express.json());
app.listen(port, "0.0.0.0");