import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //validar el formulario
    const { nombre, email, mensaje } = req.body;
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ alert: "Agrega tu nombre" });
    }
    if (email.trim() === "") {
        errores.push({ alerta: "Agrega tu correo" });
    }
    if (mensaje.trim() === "") {
        errores.push({ alerta: "Agrega tu mensaje" });
    }
    if (errores.length > 0) {
        // Mostrar la vista con errores
        res.render("testimoniales", {
            nombrePagina: "Testimoniales",
            errores,
            nombre,
            email,
            mensaje
        });
    } else {
        // Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo: email,
                mensaje
            });
            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error);
        }
    }
}
export {
    guardarTestimonial
}