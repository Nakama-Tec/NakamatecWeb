import { useEffect, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";

const Swapy = () => {
    const [cards, setCards] = useState([
        { tarjetaId: 1, title: "Descubrimiento 🔎", number: 1 },
        { tarjetaId: 2, title: "Planificación 📋", number: 2 },
        { tarjetaId: 3, title: "Desarrollo 🔧", number: 3 },
        { tarjetaId: 4, title: "Lanzamiento 📈", number: 4 },
        // Agrega más tarjetas según sea necesario
    ]);
    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(cards, 'tarjetaId'));
    const containerRef = useRef(null);
    const swapyRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            swapyRef.current = createSwapy(containerRef.current, {
                onDrop: (source, target) => {
                    const sourceId = source.dataset.swapyItem;
                    const targetId = target.dataset.swapyItem;
                    const sourceIndex = cards.findIndex(card => card.tarjetaId === parseInt(sourceId));
                    const targetIndex = cards.findIndex(card => card.tarjetaId === parseInt(targetId));
                    const updatedCards = [...cards];
                    const [movedCards] = updatedCards.splice(sourceIndex, 1);
                    updatedCards.splice(targetIndex, 0, movedCards);
                    setCards(updatedCards);
                }
            });
        }
    }, [cards]);

    useEffect(() => {
        const newSlotItemMap = utils.initSlotItemMap(cards, 'tarjetaId');
        if (JSON.stringify(newSlotItemMap) !== JSON.stringify(slotItemMap)) {
            setSlotItemMap(newSlotItemMap);
        }
    }, [cards, slotItemMap]);

    return (
        <div ref={containerRef} className="p-4">
            <div className="users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div
                        className="slot p-2"
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
                            <span className="text-lg font-semibold">{card.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swapy;
