const express = require('express');
const router = express.Router();
const FilmeController = require('../controllers/FilmeController');

router.get('/', FilmeController.listarFilmes);
router.post('/', FilmeController.cadastrarFilme);
router.put('/:id', FilmeController.atualizarFilme);
router.delete('/:id', FilmeController.removerFilme);

module.exports = router;
