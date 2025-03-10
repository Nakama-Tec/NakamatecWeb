import { useEffect, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";

const Swapy = () => {
    const [cards] = useState([
        { tarjetaId: 1, title: "Descubrimiento 🔎", description: 'Analizamos tus necesidades y objetivos para definir el mejor enfoque. Investigamos el mercado y recopilamos información clave para garantizar el éxito del proyecto.', number: 1 },
        { tarjetaId: 2, title: "Planificación 📋", description: 'Diseñamos una estrategia clara y estructurada, estableciendo tiempos, recursos y tecnologías para optimizar cada fase del desarrollo.', number: 2 },
        { tarjetaId: 3, title: "Desarrollo 🔧", description: 'Transformamos la planificación en realidad. Construimos, probamos y refinamos el producto con metodologías ágiles para asegurar eficiencia y calidad.', number: 3 },
        { tarjetaId: 4, title: "Lanzamiento 📈", description: 'Implementamos y desplegamos la solución final, asegurando un proceso fluido. Brindamos soporte para optimizar la experiencia del usuario y garantizar el éxito.', number: 4 },
        // Agrega más tarjetas según sea necesario
    ]);
   
    const containerRef = useRef(null);
   

   

    return (
        <div ref={containerRef} className="p-4">
            <div className="users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div
                        className="slot p-2 cursor-pointer"
                        key={card.tarjetaId}
                        data-swapy-slot={card.tarjetaId}
                    >
                        <div
                            className="user bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-between"
                            key={card.tarjetaId}
                            data-swapy-item={card.tarjetaId}
                        >
                            <div className="number bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                                {card.number}
                            </div>
                            <span className="text-lg font-semibold text-center mb-2">{card.title}</span>
                            <span className="text-gray-500 text-sm text-center">{card.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swapy;
