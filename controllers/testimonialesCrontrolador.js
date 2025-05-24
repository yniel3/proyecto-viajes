import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //validar el formulario
    const { nombre, email, mensaje } = req.body;
    //crear arreglo de errores para mostrar en la vista
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ alerta: "el nombre no puede ir vacio" });
    }
    if (email.trim() === "") {
        errores.push({ alerta: "Correo no debe ir vacio" });
    }
    if (mensaje.trim() === "") {
        errores.push({ alerta: "Escribe un mensaje." });
    }
    if (errores.length > 0) {
        //consulta los testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        // Mostrar la vista con errores
        res.render("testimoniales", {
            nombrePagina: "testimoniales",
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
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