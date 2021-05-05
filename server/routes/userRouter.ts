import { Router } from 'express';
import { createUser, showAllUser, deleteUser } from '../controllers/usersController';


const userRouter = Router();


userRouter.post('/', createUser);
userRouter.get('/', showAllUser);
userRouter.delete('/:id', deleteUser);

export {userRouter}
