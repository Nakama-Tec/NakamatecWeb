import LogoNakama from '../../assets/Logo.jpg'
import { Link } from 'react-router-dom'
import { CONTACT } from '../../router/router'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center bg-white font-semibold p-4'>
                
                {/* Contenedor del logo y el nombre */}
                <div className="flex justify-center items-center gap-2">
                    <img src={LogoNakama} alt="Logo Nakama" className='h-16 md:h-20' />
                    <div>
                        <p className='text-2xl md:text-4xl text-[#095ba4] leading-none'>Nakama<span className="font-bold">Tec</span></p>
                        <p className='text-lg md:text-xl text-[#095ba4]'>Software</p>
                    </div>
                </div>

                {/* Botón de contacto */}
                <Link to={CONTACT} className="bg-[#095ca4] border-2 border-blue-600 rounded-full text-white p-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#095ca4] cursor-pointer">
                    Contactanos
                </Link>
            </div>
        </header>
    )
}

export default Header
