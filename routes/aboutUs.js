import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/aboutUs';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/aboutUs', checkAuth, list);
router.get('/aboutUs/:id', checkAuth, read);
router.post('/aboutUs/', create);
router.delete('/aboutUs/:id', remove);
router.put("/aboutUs/:id",checkAuth,update);


export default router;