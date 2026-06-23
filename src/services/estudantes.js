import EstudanteModel from "../models/estudantes.js";

const EstudanteService = {

  findAll(callback) {
    EstudanteModel.findAll(callback);
  },

  findById(id, callback) {
    EstudanteModel.findById(id, callback);
  },

  create(estudante, callback) {
    EstudanteModel.create(estudante, callback);
  },

  update(id, estudante, callback) {
    EstudanteModel.update(id, estudante, callback);
  },

  delete(id, callback) {
    EstudanteModel.delete(id, callback);
  }

};

export default EstudanteService;
