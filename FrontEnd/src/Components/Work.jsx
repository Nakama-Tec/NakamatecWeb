import Server from "./Server"

const Work = () => {
  return (
    <div className="relative mb-8">
      <div className="mx-auto px-4 py-8 flex flex-col gap-4 items-center">
        <div className="mb-4 text-center w-full flex flex-col md:flex-row items-center justify-evenly">
          <h3 className="text-3xl font-[Public-Sans] md:text-6xl font-bold text-[#00275c] mb-2 md:mb-4 relative mr-0 md:mr-4">
            ¿Cómo <span className="text-[#095ba4]">trabajamos?</span>
          </h3>
          <div className="w-full md:w-1/3 relative aspect-video mt-4 md:mt-0 hidden md:block">
            <Server />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
