// controllers/FilmeController.js
const { Filme } = require('../models');

const FilmeController = {
  async listarFilmes(req, res) {
    try {
      const filmes = await Filme.findAll();
      return res.json(filmes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar filmes' });
    }
  },

  async cadastrarFilme(req, res) {
    try {
      const filme = await Filme.create(req.body);
      return res.json(filme);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar filme' });
    }
  },

  async atualizarFilme(req, res) {
    const { id } = req.params;
    try {
      await Filme.update(req.body, { where: { id } });
      const filmeAtualizado = await Filme.findByPk(id);
      return res.json(filmeAtualizado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar filme' });
    }
  },

  async removerFilme(req, res) {
    const { id } = req.params;
    try {
      const filme = await Filme.findByPk(id);
      await filme.destroy();
      return res.json({ message: 'Filme removido com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao remover filme' });
    }
  },
};

module.exports = FilmeController;
