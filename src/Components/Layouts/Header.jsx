import LogoNakama from '../../assets/Logo.jpg'

const Header = () => {
    return (
        <header>
            <div className='flex flex-col md:flex-row justify-evenly items-center bg-white font-semibold p-4'>
                
                {/* Contenedor del logo y el nombre */}
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <img src={LogoNakama} alt="Logo Nakama" className='h-16 md:h-20' />
                    <div>
                        <p className='text-2xl md:text-4xl text-[#095ba4] leading-none'>Nakama<span className="font-bold">Tec</span></p>
                        <p className='text-lg md:text-xl text-[#095ba4]'>Software</p>
                    </div>
                </div>

                {/* Botón de contacto */}
                <button className="bg-[#095ca4] border-2 border-blue-600 rounded-full text-white p-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#095ca4] cursor-pointer">
                    Contacto
                </button>
            </div>
        </header>
    )
}

export default Header
