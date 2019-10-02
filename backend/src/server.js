const express = require("express");
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://joaodematejr:joaodematejr@cluster0-ardag.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

//GET, POST, PUT, DELETE

//req.query = ACESSAR QUERY PARAMS (PARA FILTRO)
//req.params = ACESSAR ROUTE PARAMS (PARA EDITAR E DELETAR)
//req.body = ACESSAR CORPO DA REQUISIÇÃO (PARA CRIAÇÃO, EDIÇÃO)

app.use(express.json());
app.use(routes);

app.listen(3333);
