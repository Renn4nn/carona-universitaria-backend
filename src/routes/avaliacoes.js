import { Router } from 'express';
import controller from '../controller/avaliacoes.js';
import { protegerRota } from '../middleware/auth.js';

const router = Router();

router.get('/', protegerRota, controller.index);
router.get('/:id', protegerRota, controller.show);
router.post('/', protegerRota, controller.create);
router.put('/:id', protegerRota, controller.update);
router.delete('/:id', protegerRota, controller.delete);

export default router;
