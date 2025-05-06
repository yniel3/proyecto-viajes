import { Viaje } from "../models/Viajes.js";

const inicio = (req, res ) => {
    const cuco = "Mi cunhado";
    res.render("inicio", {
        nombrePagina: "Inicio"
    });
};

const cosas = async (req, res ) => {
    //calgar cosas de la DB
    const items = await Viaje.findAll();
    console.log(items)

    res.render("cosas", {
        nombrePagina: "Cosas",
        items
    });
};

const cosaDetalle = async (req, res ) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({where : { slug }});
        res.render("cosa", {
            nombrePagina: "Informacion Viajes",
            resultado
        })
    } catch (error) {
        console.log(error)
    }
};

const nosotros = (req, res ) => {
    const persona = "Soy una humano en un oceano de humanos"
    res.render('nosotros', {
        persona,
        nombrePagina: "Nosotros"
    });
};

const testimoniales = (req, res ) => {
    res.render("testimoniales", {
        nombrePagina: "Testimoniales"
    });
};

export {
    inicio,
    cosas,
    cosaDetalle,
    nosotros,
    testimoniales
}