import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configura el transporte de Nodemailer
let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "matias_seb_chocobar@hotmail.com",
        pass: "PROGRAMADORmia10849292<c#>"
    }
});

export { transporter };