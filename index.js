import express from "express";
import dotenv from "dotenv"
import miDB from "./config/db.js";
import router from "./routes/adminRoutes.js";

const app = express();
// conectar a la Base de Datos
miDB.authenticate()
    .then(() => console.log("base de datos conectada"))
    .catch( error => console.log(error))
//definiendo el puerto
const PORT = process.env.PORT || 4000;
//Habilitar pug
app.set("view engine", "pug");
// Obtener la fecha actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.yearActual = year.getFullYear();
    res.locals.nombreSitio = "mySitio";
    next()
})
//cargando Recusos y Estilos en la carpeta public
app.use(express.static("public"));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Bro hazlo. De pana! ${PORT}`)
});

