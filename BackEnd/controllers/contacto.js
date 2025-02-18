import { transporter } from "../DB/configDB.js";
import dotenv from 'dotenv';

dotenv.config();


//esta funcion crear/inserta en la base de datos y envia el mail con el contenido
const createContacts =(req,res)=>{
    const { nombre, email, pais, telefono, empresa, asunto, mensaje } = req.body
    
   
   
    // Configura el contenido del correo
    let mailOptions = {
        from: email,// aqui va el correo del que envia el mensaje osea en mail figura correo nakama
        to: process.env.EMAIL_USER,//aqui va el correo al que se enviara el mensaje osea en mail figura correo nakama
        subject: asunto || ` Nuevo mensaje de ${nombre}`,
        text:`Nombre: ${nombre}
              Correo: ${email}
              País: ${pais}
              Teléfono: ${telefono || "No proporcionado"}
              Empresa: ${empresa || "No proporcionado"}
              Mensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error al enviar el correo:", error);
            return res.status(500).json({ message: "Error al enviar el correo", error });
        }
        console.log("Correo enviado con éxito:", info.response);
        res.status(200).json({ message: "Mensaje enviado correctamente", response: info.response });
    });
    
};


export default {createContacts}