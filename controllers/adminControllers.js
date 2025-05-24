import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimoniales.js";

const inicio = async (req, res ) => {
    //calgar cosas de la DB
    const items = await Viaje.findAll({ limit: 3});
    try {
        res.render("inicio", {
            nombrePagina: "inicio",
            items
        });
    } catch (error) {
        
    }
};

const viajes = async (req, res ) => {
    //calgar cosas de la DB
    const items = await Viaje.findAll();
    // renderizar pagina con todos los viajes
    res.render("viajes", {
        nombrePagina: "viajes",
        items
    });
};

const viajeDetalles = async (req, res ) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({where : { slug: slug }});
        const testimoniales = await Testimonial.findAll({ limit: 3});
        res.render("viajes-detalles", {
            nombrePagina: "Informacion viaje",
            resultado,
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
};

const nosotros = async (req, res ) => {
    try {

        const testimoniales = await Testimonial.findAll({ limit: 3});
        const items = await Viaje.findAll({ limit: 3});
        res.render('nosotros', {
            nombrePagina: "nosotros",
            testimoniales,
            items
        });
    } catch (error) {
        
    }
};

const testimoniales = async (req, res ) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render("testimoniales", {
            nombrePagina: "testimoniales",
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
};

export {
    inicio,
    viajes,
    viajeDetalles,
    nosotros,
    testimoniales
}