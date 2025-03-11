import { useState } from "react";

const Swapy = () => {
    const [cards] = useState([
        { tarjetaId: 1, title: "Desarrollo Web 📱", description: '.' },
        { tarjetaId: 2, title: "Desarrollo de Aplicaciones 📋", description: '.', number: 2 },
        { tarjetaId: 3, title: "Sistemas de Gestion 🔧", description: '', number: 3 },
        { tarjetaId: 4, title: "e-Commerce 📈", description: '', number: 4 },
        // Agrega más tarjetas según sea necesario
    ]);

    return (
        <div className="p-4">
            <div className="flex flex-col items-center justify-center mb-10 mt-10">
                <p className="text-3xl sm:text-5xl text-[#00275c] font-bold font-[Public-Sans]">
                    Nuestros <span className="text-[#095ba4]">servicios</span>
                </p>
            </div>
            <div className="users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div
                        className="slot p-2 cursor-pointer font-bold font-[Public-Sans] text-[#00275c] text-center"
                        key={card.tarjetaId}
                        data-swapy-slot={card.tarjetaId}
                    >
                        <div
                            className="user bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-between h-30 w-auto transition-transform duration-300 hover:scale-105 hover:bg-blue-200 "
                            key={card.tarjetaId}
                            data-swapy-item={card.tarjetaId}
                        >
                            {/* Título con efecto hover */}
                            <span className="text-2xl sm:text-3xl font-semibold text-center mb-2 transition-transform duration-300 transform hover:scale-110">
                                {card.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swapy;
