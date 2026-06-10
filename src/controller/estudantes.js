import EstudanteService from "../services/estudantes";

const EstudantesController = {

  findAll(req, res) {

    EstudanteService.findAll((erro, resultados) => {

      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao buscar estudantes'
        });
      }

      res.status(200).json(resultados);

    });

  },

  findById(req, res) {

    const { id } = req.params;

    EstudanteService.findById(id, (erro, resultados) => {

      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao buscar estudante'
        });
      }

      if (resultados.length === 0) {
        return res.status(404).json({
          erro: 'Estudante não encontrado'
        });
      }

      res.status(200).json(resultados[0]);

    });

  },

  create(req, res) {

    EstudanteService.create(req.body, (erro, resultado) => {

      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao cadastrar estudante'
        });
      }

      res.status(201).json({
        mensagem: 'Estudante cadastrado com sucesso',
        id: resultado.insertId
      });

    });

  },

  update(req, res) {

    const { id } = req.params;

    EstudanteService.update(id, req.body, (erro, resultado) => {

      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao atualizar estudante'
        });
      }

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
          erro: 'Estudante não encontrado'
        });
      }

      res.status(200).json({
        mensagem: 'Estudante atualizado com sucesso'
      });

    });

  },

  delete(req, res) {

    const { id } = req.params;

    EstudanteService.delete(id, (erro, resultado) => {

      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao remover estudante'
        });
      }

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
          erro: 'Estudante não encontrado'
        });
      }

      res.status(200).json({
        mensagem: 'Estudante removido com sucesso'
      });

    });

  }

};

export default EstudantesController;