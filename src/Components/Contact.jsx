import { motion } from 'framer-motion';

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
                    <motion.a
                        href="/contact"
                        className="bg-[#095ba4] text-white font-semibold py-2 px-4 rounded hover:bg-[#074a8a] transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contactanos
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
