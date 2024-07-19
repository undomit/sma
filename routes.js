import express from 'express';
import {loginController, addAuthToken} from './controllers/loginController.js';
import {logoutController} from './controllers/logoutController.js';
import { getStatusController } from './controllers/statusController.js';

export const router = express.Router();

router.post('/login', addAuthToken, loginController);

router.get('/status', addAuthToken, getStatusController);

router.post('/logout', addAuthToken, logoutController);
