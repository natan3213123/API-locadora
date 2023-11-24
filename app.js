const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize('postgres://bd_locadora_user:IQYY26CzV2V45c8Vu7sO7nmWpnmBZgXD@dpg-clghaief27hc739khr4g-a/bd_locadora', {
  dialect: 'postgres',
});

const Filme = sequelize.define('Filme', {
  nome: DataTypes.STRING,
  diretor: DataTypes.STRING,
  descricao: DataTypes.STRING,
  dataPublicacao: DataTypes.STRING,
  genero: DataTypes.STRING,
  roteirista: DataTypes.STRING,
  elenco: DataTypes.STRING,
  duracao: DataTypes.STRING,
  classificacaoEtaria: DataTypes.STRING,
  sinopse: DataTypes.STRING
});

app.post('/cadastro-filme', async (req, res) => {
  try {
    const filme = await Filme.create({
      nome: req.body.nome,
      diretor: req.body.diretor,
      descricao: req.body.descricao,
      dataPublicacao: req.body.dataPublicacao,
      genero: req.body.genero,
      roteirista: req.body.roteirista,
      elenco: req.body.elenco,
      duracao: req.body.duracao,
      classificacaoEtaria: req.body.classificacaoEtaria,
      sinopse: req.body.sinopse
    });
    res.status(201).json(filme);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao cadastrar filme' });
  }
});

app.get('/todos', async (req, res) => {
  try {
    const filme = await Filme.findAll();
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filme' });
  }
});

app.delete('/excluir-filme/:id', async (req, res) => {
  const filmeId = req.params.id;

  try {
    const filme = await Filme.findByPk(filmeId);

    if (!filme) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }

    await filme.destroy();
    res.status(200).json({ message: 'Filme excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir filme' });
  }
});


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
