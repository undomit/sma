import { SMA_TOKEN } from "../controllers/loginController.js";

export const addAuthToken = (req, res, next) => {
    if (SMA_TOKEN) {
        req.headers['Authorization'] = `Bearer ${SMA_TOKEN}`;
    }

    next();
}