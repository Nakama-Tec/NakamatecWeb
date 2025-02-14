const Services = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl sm:text-5xl text-[#00275c] font-bold font-[Public-Sans]">
                    Nuestros <span className="text-[#095ba4]">servicios</span>
                </p>
            </div>
            <div className="mt-8 flex flex-col items-center m-2 sm:m-5">
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="bg-[#2f476b] text-white text-center font-[Public-Sans] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <h2 className="text-xl sm:text-2xl font-semibold">Desarrollo web</h2>
                    </div>
                    <div className="bg-[#2f476b] text-white text-center font-[Public-Sans] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <h2 className="text-xl sm:text-2xl font-semibold">Desarrollo de aplicaciones</h2>
                    </div>
                    <div className="bg-[#2f476b] text-white text-center font-[Public-Sans] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <h2 className="text-xl sm:text-2xl font-semibold">Sistemas de gestión</h2>
                    </div>
                    <div className="bg-[#2f476b] text-white text-center font-[Public-Sans] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <h2 className="text-xl sm:text-2xl font-semibold">E-Commerce</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
