import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configura el transporte de Nodemailer
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "info.nakamatec@gmail.com",
        pass: "Nakamatec05_"
    }
});

export { transporter };