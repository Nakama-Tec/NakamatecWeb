import { motion } from 'framer-motion';

const Valores = () => {
  const data = [
    {
      title: "Misión",
      shortDescription: "Nuestra misión es proporcionar soluciones innovadoras.",
      longDescription: "Proporcionamos soluciones innovadoras para mejorar la calidad de vida y contribuir al desarrollo sostenible.",
      image: "https://www.veropreviale.com/wp-content/uploads/2023/02/mision-vision-y-valores.svg"
    },
    {
      title: "Visión",
      shortDescription: "Ser líderes en el mercado global.",
      longDescription: "Buscamos ser líderes globales con excelencia en productos y servicios, comprometidos con la responsabilidad social y ambiental.",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-vision-illustration-download-in-svg-png-gif-file-formats--business-layout-and-money-pack-illustrations-1234540.png"
    },
    {
      title: "Valores",
      shortDescription: "Integridad, Innovación, Excelencia.",
      longDescription: "Nos regimos por la integridad, innovación y excelencia para superar expectativas y fomentar la colaboración.",
      image: "https://208f1686.rocketcdn.me/wp-content/uploads/2018/09/Liderar-no-es-mandar-1080x675-1.jpg"
    }
  ];


  return (
    <div>
      <h3 className="flex justify-center text-2xl font-[Public-Sans] md:text-4xl lg:text-6xl font-bold text-[#00275c] mb-2 md:mb-4 md:mr-4 m-5">
        Nuestros <span className="text-[#095ba4] relative left-2 md:left-4"> valores</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-6 m-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-[300px] md:w-[400px] h-[220px] bg-gradient-to-b from-[#131114] to-[#080509] border border-[#a69352] rounded-[20px] p-5 shadow-lg flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-md" />
              <h3 className="text-white text-[20px] md:text-[24px] font-semibold">{item.title}</h3>
            </div>
            <p className="text-[hsla(0,0%,100%,0.6)] text-[16px] md:text-[18px] leading-[20px] mt-2">{item.shortDescription}</p>
            <p className="text-white text-[14px] md:text-[16px] leading-[20px] mt-2">{item.longDescription}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Valores;
