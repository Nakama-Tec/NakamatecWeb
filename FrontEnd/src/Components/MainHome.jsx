import Banner from '../assets/Banner.svg'

const MainHome = () => {
    return ( 
        <div className="relative mb-8">
            <div className="mx-auto px-4 py-8 flex flex-col gap-4 md:flex-row items-center justify-evenly">
                <div className="mb-4 md:mb-0 text-center">
                    <h1 className="text-3xl font-[Public-Sans] md:text-6xl font-bold text-[#00275c] mb-2 md:mb-4 relative">Desarrollo <span className='text-[#095ba4]'>Web</span></h1>
                    <p className="text-xl font-[Public-Sans] md:text-3xl text-[#00275c] mb-2">Tu software a medida</p>
                </div>
                <div className="w-full md:w-1/3 relative aspect-video">
                    <img
                    src={Banner}
                    alt="Banner"
                    className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div> 
     );
}

export default MainHome
