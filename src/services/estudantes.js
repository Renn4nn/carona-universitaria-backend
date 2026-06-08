import model from '../models/estudantes.js';

class EstudantesService {
  findAll() {
    model.findAll();
  }

  async findById(id) {
    const estudante = await model.findById(id);
    if (!estudante) {
      throw new Error('Estudante não encontrado');
    }
    return estudante;
  }

  async create(dados) {

    const estudanteExistente = await model.findByEmail(dados.email);

    if (estudanteExistente) {
      throw new Error('E-mail já cadastrado');
    }

    dados.senha = await bcrypt.hash(dados.senha, 10);

    return await model.create(dados);
  }

  async update(id, dados) {
    const estudante = await model.findById(id);
    if (!estudante) {
      throw new Error('Estudante não encontrado');
    }
    return await model.update(id, dados);
  }

  async delete(id) {
    const estudante = await model.findById(id);
    if (!estudante) {
      throw new Error('Estudante não encontrado');
    }
    return await model.delete(id);
  }
}

export default new EstudantesService();