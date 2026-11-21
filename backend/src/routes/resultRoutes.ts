import {Router} from 'express';import {auth} from '../middleware/auth';import {asyncHandler} from '../utils/asyncHandler';import {myResults,getResult} from '../controllers/resultController';
const router=Router();router.use(auth);router.get('/my-results',asyncHandler(myResults));router.get('/:id',asyncHandler(getResult));export default router;
