import model from '../models/avaliacoes.js';

class AvaliacoesService {
  buscarTodas(callback) {
    model.findAll(callback);
  }

  buscarPorId(id, callback) {
    model.findById(id, callback);
  }

  criar(dados, callback) {
    model.create(dados, callback);
  }

  atualizar(id, dados, callback) {
    model.update(id, dados, callback);
  }

  remover(id, callback) {
    model.delete(id, callback);
  }
}

export default new AvaliacoesService();
