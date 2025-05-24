import Sequelize from "sequelize";
import miDB from "../config/db.js";

export const Testimonial = miDB.define("testimoniales", {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})