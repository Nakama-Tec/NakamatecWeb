
const Work = () => {
return (
    <div className="relative mb-8">
        <div className="mx-auto px-4 py-8 flex flex-col gap-4 items-center justify-center">
            <div className="mb-4 text-center w-full">
                <h3 className="text-3xl font-[Public-Sans] md:text-6xl font-bold text-[#00275c] mb-2 md:mb-4 relative">
                    ¿Cómo <span className="text-[#095ba4]">trabajamos?</span>
                </h3>
            </div>
            <div className="">
  <div className="card">
    <div className="header">
      <p className="title">Terminal</p>
      <button className="copy">
        <svg
          className="w-[19px] h-[19px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div className="footer">
      <div className="code">
        <span className="icon">
          <svg
            className="w-[19px] h-[19px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m9 5 7 7-7 7"
            ></path>
          </svg>
        </span>
        <p className="text">npm install -D tailwindcss</p>
      </div>
      <div className="code">
        <span className="icon">
          <svg
            className="w-[19px] h-[19px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m9 5 7 7-7 7"
            ></path>
          </svg>
        </span>
        <p className="text">npx tailwindcss init</p>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
)
}

export default Work
