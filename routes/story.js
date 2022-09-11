import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/story';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/story', checkAuth, list);
router.get('/story/:id', checkAuth, read);
router.post('/story/', create);
router.delete('/story/:id', remove);
router.put("/story/:id",checkAuth,update);


export default router;