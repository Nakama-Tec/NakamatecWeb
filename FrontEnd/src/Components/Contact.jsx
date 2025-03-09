import { motion } from 'framer-motion';
import { CONTACT } from '../router/router';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
            <motion.div 
                className="shadow-md rounded-lg p-8 md:p-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl font-[Public-Sans] md:text-4xl lg:text-6xl font-bold text-[#00275c] mb-4 md:mb-8 text-center">
                    Comienza a trabajar con <span className="text-[#095ba4]">nosotros</span>
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 text-center">
                    Estamos ansiosos por colaborar contigo. Haz clic en el botón de abajo para llenar el formulario y dar el primer paso hacia una asociación exitosa.
                </p>
                <div className="flex justify-center">
                    <Link
                         to={CONTACT}
                        className="bg-[#095ca4] border-2 border-blue-600 rounded-full text-white p-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#095ca4] cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contactanos
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
