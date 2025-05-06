import express from "express";
const router = express.Router();
import { 
    inicio,
    cosas, 
    cosaDetalle, 
    nosotros, 
    testimoniales
} from "../controllers/adminControllers.js"

router.get('/', inicio);
router.get('/cosas', cosas);
router.get('/cosas/:slug', cosaDetalle);
router.get('/nosotros', nosotros);
router.get('/testimoniales', testimoniales);

export default router;