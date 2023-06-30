import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

const userController = new UserController();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/user/:id', userController.getById);
router.post('/users', userController.create);

export default router;