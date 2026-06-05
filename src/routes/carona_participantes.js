import { Router } from 'express';
import controller from '../controller/carona_participantes.js';
import { protegerRota } from '../middleware/auth.js';

const router = Router();


router.get('/caronas-participantes', controller.index);
router.get('/caronas-participantes/carona/:carona_id', controller.showByCarona);
router.get('/caronas-participantes/estudante/:estudante_id', controller.showByEstudante);
router.get('/caronas-participantes/:id', controller.show);

router.post('/caronas-participantes', protegerRota, controller.create);
router.put('/caronas-participantes/:id', protegerRota, controller.update);
router.delete('/caronas-participantes/:id', protegerRota, controller.delete);

export default router;