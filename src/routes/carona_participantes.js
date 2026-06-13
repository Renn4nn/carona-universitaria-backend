import { Router } from 'express';
import controller from '../controller/carona_participantes.js';
import { protegerRota } from '../middleware/auth.js';

const router = Router();

router.get('/', controller.index);
router.get('/carona/:carona_id', controller.showByCarona);
router.get('/estudante/:estudante_id', controller.showByEstudante);
router.get('/:id', controller.show);

router.post('/', protegerRota, controller.create);
router.put('/:id', protegerRota, controller.update);
router.delete('/:id', protegerRota, controller.delete);

export default router;
