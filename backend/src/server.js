const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require("./routes");
const path = require("path");

const app = express();

mongoose.connect('mongodb+srv://joaodematejr:joaodematejr@cluster0-ardag.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

//GET, POST, PUT, DELETE

//req.query = ACESSAR QUERY PARAMS (PARA FILTRO)
//req.params = ACESSAR ROUTE PARAMS (PARA EDITAR E DELETAR)
//req.body = ACESSAR CORPO DA REQUISIÇÃO (PARA CRIAÇÃO, EDIÇÃO)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
