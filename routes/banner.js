import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/banner';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/banners', checkAuth, list);
router.get('/banners/:id', checkAuth, read);
router.post('/banners/', create);
router.delete('/banners/:id', remove);
router.put("/banners/:id",checkAuth,update);


export default router;