import { Router } from 'express';
import { EstudanteController } from '../controllers/EstudanteController.js';

const router = Router();

router.post('/estudantes', EstudanteController.criar);
router.get('/estudantes', EstudanteController.listar);
router.get('/estudantes/:id', EstudanteController.buscarPorId);

export default router;