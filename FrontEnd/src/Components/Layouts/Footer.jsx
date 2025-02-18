import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="flex items-center justify-center">
                    2025 &copy; Derechos Reservados por <a className='ml-1 cursor-pointer' href='https://www.instagram.com/nakama.tec/' target='_blank'>@NakamaTec</a> <FaHeart className="ml-2 text-white" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;