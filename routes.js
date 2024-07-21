import express from 'express';
import { loginController } from './controllers/loginController.js';
import {logoutController} from './controllers/logoutController.js';
import { getStatusController } from './controllers/statusController.js';
import { getPlantsController } from './controllers/plantsController.js';
import { getDevicesController } from './controllers/devicesController.js';
import { getDetailsController } from './controllers/detailsController.js';
import { addAuthToken } from './middleware/addAuthToken.js';
import { disableCaching } from './middleware/disableCaching.js';

export const router = express.Router();

router.post('/login', loginController);

router.get('/status', addAuthToken, disableCaching, getStatusController);

router.post('/logout', addAuthToken, logoutController);

router.get('/plants', addAuthToken, getPlantsController);

router.get('/plants/:plantId/devices', addAuthToken, getDevicesController);

router.get('/devices/:deviceId', addAuthToken, getDetailsController);