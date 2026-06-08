import estudantesService from '../services/estudantes.js';

class EstudantesController {
  async findAll(req, res) {
    try {
      const estudantes = await estudantesService.findAll();

      res.status(200).json(estudantes);
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;

      await estudantesService.findById(id);

      res.status(200).json({ mensagem: 'Estudante encontrado com sucesso' });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  async create(req, res) {
    try {
      const dados = req.body;

      await estudantesService.create(dados);

      res.status(201).json({
        mensagem: 'Estudante criado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      await estudantesService.update(id, dados);

      res.status(200).json({ mensagem: 'Estudante atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({
        erro: error.message
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await estudantesService.delete(id);

      res.status(200).json({ mensagem: 'Estudante deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

export default new EstudantesController();