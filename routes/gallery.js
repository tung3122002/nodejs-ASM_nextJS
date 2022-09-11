import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/gallery';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/gallerys', checkAuth, list);
router.get('/gallerys/:id', checkAuth, read);
router.post('/gallerys/', create);
router.delete('/gallerys/:id', remove);
router.put("/gallerys/:id",checkAuth,update);


export default router;