import service from '../services/carona_participantes.js';

class CaronasParticipantesController {
  index = (req, res) => {
    service.buscarTodos((erro, resultados) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao buscar participantes' });

      res.status(200).json(resultados);
    });
  };

  showByCarona = (req, res) => {
    const { carona_id } = req.params;

    service.buscarPorCarona(carona_id, (erro, resultados) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao buscar participantes da carona' });

      res.status(200).json(resultados);
    });
  };

  showByEstudante = (req, res) => {
    const { estudante_id } = req.params;

    service.buscarPorEstudante(estudante_id, (erro, resultados) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao buscar caronas do estudante' });

      res.status(200).json(resultados);
    });
  };

  show = (req, res) => {
    const { id } = req.params;

    service.buscarPorId(id, (erro, resultados) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao buscar registro' });

      if (resultados.length === 0)
        return res
          .status(404)
          .json({ erro: 'Registro não encontrado' });

      res.status(200).json(resultados[0]);
    });
  };

  create = (req, res) => {
    const { carona_id, estudante_id, valor } = req.body;

    service.solicitarCarona(
      { carona_id, estudante_id, valor },
      (erro, resultados) => {
        if (erro)
          return res
            .status(500)
            .json({ erro: 'Erro ao solicitar carona' });

        res.status(201).json({
          mensagem: 'Solicitação realizada com sucesso',
          id: resultados.insertId
        });
      }
    );
  };

  update = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    service.atualizarStatus(id, status, (erro) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao atualizar status' });

      res
        .status(200)
        .json({ mensagem: 'Status atualizado com sucesso' });
    });
  };

  delete = (req, res) => {
    const { id } = req.params;

    service.removerParticipacao(id, (erro) => {
      if (erro)
        return res
          .status(500)
          .json({ erro: 'Erro ao remover participação' });

      res.status(200).json({
        mensagem: 'Participação removida com sucesso'
      });
    });
  };
}

export default new CaronasParticipantesController();