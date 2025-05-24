// Importrs
import express from "express";
const router = express.Router();
import { 
    inicio,
    viajes,
    viajeDetalles, 
    nosotros, 
    testimoniales
} from "../controllers/adminControllers.js"
import { guardarTestimonial } from "../controllers/testimonialesCrontrolador.js";


router.get('/', inicio);
router.get('/viajes', viajes);
router.get('/viajes/:slug', viajeDetalles);
router.get('/nosotros', nosotros);
router.get('/testimoniales', testimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;