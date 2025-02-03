// import LogoNakama from '../../assets/Logo1.jpg'

const Header = () => {
return (
    <header>
        <div className='flex justify-around items-center bg-gray-600 text-white font-semibold p-4'>
            {/* <img src={LogoNakama} alt="Logo Nakama" className='h-20' /> */}
            <div>
                <p className='text-4xl text-white'>Nakama Tec </p>
                <p className='text-xl text-white'>Software</p>
            </div>
            <div>
                <button className="bg-[#095ca4] border-2 border-blue-600 rounded-full text-white p-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#095ca4] cursor-pointer">
                    Contacto
                </button>
            </div>
        </div>
    </header>
)
}

export default Header
