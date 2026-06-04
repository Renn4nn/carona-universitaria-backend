import model from '../models/CaronaParticipanteModel.js';

class CaronasParticipantesService {
  buscarTodos(callback) {
    model.findAll(callback);
  }

  buscarPorCarona(carona_id, callback) {
    model.findByCarona(carona_id, callback);
  }

  buscarPorEstudante(estudante_id, callback) {
    model.findByEstudante(estudante_id, callback);
  }

  buscarPorId(id, callback) {
    model.findById(id, callback);
  }

  solicitarCarona(dados, callback) {
    const dadosCompletos = {
      ...dados,
      status: 'pendente'
    };

    model.create(dadosCompletos, callback);
  }

  atualizarStatus(id, status, callback) {
    model.updateStatus(id, status, callback);
  }

  removerParticipacao(id, callback) {
    model.delete(id, callback);
  }
}

export default new CaronasParticipantesService();