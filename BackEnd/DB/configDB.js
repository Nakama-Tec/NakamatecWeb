import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configura el transporte de Nodemailer
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export { transporter };