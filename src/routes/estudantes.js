import { Router } from 'express';
import { protegerRota } from '../middleware/auth.js';
import EstudantesController from '../controller/estudantes.js';

const router = Router();

router.get('/', protegerRota, EstudantesController.findAll);
router.get('/:id', protegerRota, EstudantesController.findById);
router.post('/', protegerRota, EstudantesController.create);
router.put('/:id', protegerRota, EstudantesController.update);
router.delete('/:id', protegerRota, EstudantesController.delete);

export default router;
