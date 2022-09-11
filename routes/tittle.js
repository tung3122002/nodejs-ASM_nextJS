import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/tittle';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/tittle', checkAuth, list);
router.get('/tittle/:id', checkAuth, read);
router.post('/tittle/', create);
router.delete('/tittle/:id', remove);
router.put("/tittle/:id",checkAuth,update);


export default router;