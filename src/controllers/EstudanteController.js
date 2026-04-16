import { prisma } from '../../lib/prisma'

export const EstudanteController = {
  async criar(req, res) {
    try {
      const novoEstudante = await prisma.estudante.create({
        data: req.body,
      });
      return res.status(201).json(novoEstudante);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar estudante" });
    }
  },

  async listar(req, res) {
    try{
        const estudantes = await prisma.estudante.findMany({
        where: { ativo: true }
    });
    return res.json(estudantes);
    }catch(err){
        return res.status(404).json({ error: "Estudante não existe" });
    }
  },

  async deletar(req, res){
    try{
        const { id } = req.params;
        const estudantes = await prisma.estudante.delete({where: {id: id}})
        return res.status(204).send();
    }catch(err){
        return res.status(404).json({ error: "Estudante não existe" });
    }
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const estudante = await prisma.estudante.findUnique({ where: { id } });
    
    if (!estudante) return res.status(404).json({ error: "Não encontrado" });
    return res.json(estudante);
  }
};