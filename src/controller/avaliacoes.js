import service from '../services/avaliacoes.js';

class AvaliacoesController {
  index = (req, res) => {
    service.buscarTodas((erro, resultados) => {
      if (erro) {
        return res.status(500).json({ erro: 'Erro ao buscar avaliacoes' });
      }

      res.status(200).json(resultados);
    });
  };

  show = (req, res) => {
    const { id } = req.params;

    service.buscarPorId(id, (erro, resultados) => {
      if (erro) {
        return res.status(500).json({ erro: 'Erro ao buscar avaliacao' });
      }

      if (resultados.length === 0) {
        return res.status(404).json({ erro: 'Avaliacao nao encontrada' });
      }

      res.status(200).json(resultados[0]);
    });
  };

  create = (req, res) => {
    const { avaliador_id, avaliado_id, carona_id, nota, comentario } = req.body;

    if (!avaliador_id || !avaliado_id || !carona_id || nota === undefined) {
      return res.status(400).json({
        erro: 'Avaliador, avaliado, carona e nota sao obrigatorios'
      });
    }

    if (!Number.isInteger(nota) || nota < 1 || nota > 5) {
      return res.status(400).json({ erro: 'A nota deve ser um inteiro entre 1 e 5' });
    }

    if (avaliador_id === avaliado_id) {
      return res.status(400).json({ erro: 'O estudante nao pode avaliar a si mesmo' });
    }

    service.criar(
      { avaliador_id, avaliado_id, carona_id, nota, comentario },
      (erro, resultado) => {
        if (erro) {
          return res.status(500).json({ erro: 'Erro ao criar avaliacao' });
        }

        res.status(201).json({
          mensagem: 'Avaliacao criada com sucesso',
          id: resultado.insertId
        });
      }
    );
  };

  update = (req, res) => {
    const { id } = req.params;
    const { nota, comentario } = req.body;

    if (!Number.isInteger(nota) || nota < 1 || nota > 5) {
      return res.status(400).json({ erro: 'A nota deve ser um inteiro entre 1 e 5' });
    }

    service.atualizar(id, { nota, comentario }, (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ erro: 'Erro ao atualizar avaliacao' });
      }

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ erro: 'Avaliacao nao encontrada' });
      }

      res.status(200).json({ mensagem: 'Avaliacao atualizada com sucesso' });
    });
  };

  delete = (req, res) => {
    const { id } = req.params;

    service.remover(id, (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ erro: 'Erro ao remover avaliacao' });
      }

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ erro: 'Avaliacao nao encontrada' });
      }

      res.status(200).json({ mensagem: 'Avaliacao removida com sucesso' });
    });
  };
}

export default new AvaliacoesController();
