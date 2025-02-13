import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configura el transporte de Nodemailer
let transporter = nodemailer.createTransport({
    service: "servidro de correo ejemplo gmail o hotmail",
    auth: {
        user: "el correo que envia el mensaje",
        pass: "contraseña del correo"
    }
});

export { transporter };