import React from 'react'

const Form = () => {
  return (
    <div>
      Formulario de contacto
    </div>
  )
}

export default Form

// import { useRef } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import emailjs from "emailjs-com";

// const schema = z.object({
//   nombre: z.string().min(1, "El nombre es requerido"),
//   email: z.string().email("Correo electrónico inválido"),
//   pais: z.string().min(1, "El país es requerido"),
//   telefono: z.string().optional(),
//   empresa: z.string().optional(),
//   asunto: z.string().optional(),
//   mensaje: z.string().min(1, "El mensaje es requerido"),
// });

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const form = useRef();

//   const onSubmit = () => {
//     emailjs.sendForm('service_sy5qmuk', 'template_ir2oaae', form.current, 'DLLW9yosrjIB9j2pp')
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Enviado',
//           text: 'Tu mensaje ha sido enviado exitosamente!',
//         });
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
//       <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
//         <h2 className="text-3xl font-bold text-white">Contacto</h2>
//         <p className="text-gray-400 mb-6">Por favor envíanos tus comentarios, en breve nos contactaremos.</p>
        
//         <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-300">Nombre completo (requerido)</label>
//               <input type="text" {...register("nombre")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//               {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
//             </div>
//             <div>
//               <label className="block text-gray-300">Email (requerido)</label>
//               <input type="email" {...register("email")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//             </div>
//             <div>
//               <label className="block text-gray-300">País (requerido)</label>
//               <input type="text" {...register("pais")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//               {errors.pais && <p className="text-red-500 text-sm">{errors.pais.message}</p>}
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-300">Teléfono</label>
//               <input type="text" {...register("telefono")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//             </div>
//             <div>
//               <label className="block text-gray-300">Empresa</label>
//               <input type="text" {...register("empresa")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//             </div>
//             <div>
//               <label className="block text-gray-300">Asunto</label>
//               <input type="text" {...register("asunto")} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-gray-300">Mensaje</label>
//             <textarea {...register("mensaje")} className="w-full p-2 h-32 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-500" />
//             {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
//           </div>
          
//           <div className="flex justify-between">
//             <Link to="/" className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded font-bold">
//               Volver atrás
//             </Link>
//             <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded font-bold">
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
