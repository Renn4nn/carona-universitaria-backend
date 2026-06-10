import { Router } from 'express';
import * as CaronaController from '../controller/CaronasController.js';
import { protegerRota } from '../middleware/auth.js';

const router = Router();

router.get('/', protegerRota, CaronaController.listar);
router.get('/:id', protegerRota, CaronaController.buscarPorId);
router.post('/', protegerRota, CaronaController.criar);
router.put('/:id', protegerRota, CaronaController.atualizar);
router.delete('/:id', protegerRota, CaronaController.deletar);

export default router;