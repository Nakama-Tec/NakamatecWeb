import { transporter } from "../DB/configDB.js";


//esta funcion crear/inserta en la base de datos y envia el mail con el contenido
const createContacts =(req,res)=>{
    const {Nombre,Email,Motivo,Comentario} = req.body
    
   
   
    // Configura el contenido del correo
    let mailOptions = {
        from: "correo de donve vino el mail",// aqui va el correo del que envia el mensaje osea en mail figura correo nakama
        to: "correo que envia el mail",//aqui va el correo al que se enviara el mensaje osea en mail figura correo nakama
        subject: ` Nuevo mensaje de ${Nombre}`,
        text: `
            Nombre: ${Nombre}

            Email: ${Email}

            Motivo: ${Motivo}
            
            Comentario: ${Comentario}
        `
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