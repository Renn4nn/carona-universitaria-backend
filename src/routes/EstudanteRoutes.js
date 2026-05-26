import { Router } from 'express';
// import { EstudanteController } from '../controllers/EstudanteController.js';

const router = Router();

router.get('/estudantes', (req, res) => {
  const estudantes = [
    { id: 1, nome: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, nome: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, nome: 'Jim Doe', email: 'jim.doe@example.com' },
  ];
  res.json(estudantes);
});

export default router;