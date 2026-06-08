import { Router } from 'express';
import { protegerRota } from '../middleware/auth.js';
import EstudantesController from '../controller/estudantes.js';

const router = Router();

router.get('/estudantes', protegerRota, EstudantesController.findAll);
router.get('/estudantes/:id', protegerRota, EstudantesController.findById);
router.post('/estudantes', protegerRota, EstudantesController.create);
router.put('/estudantes/:id', protegerRota, EstudantesController.update);
router.delete('/estudantes/:id', protegerRota, EstudantesController.delete);

export default router;