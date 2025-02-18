import express, { json } from "express";
import contactame from "./routers/contacto.js";
import cors from "cors";
import bodyParser from 'body-parser';
const { json: _json } = bodyParser;
import { config } from "dotenv";

config()// elemento para que me lleguen los correos

const app = express();
const port = 8000;

app.use(_json()); // elemento para que me lleguen los correos

// Configurar middleware
app.use(cors());
app.use(json());

// Middleware para verificar el token


// Montando las rutas en sus respectivos endpoints
app.use("/", contactame);


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}\nIngresar: http://localhost:${port}/`);
});


