import { heart, monster } from "../assets";

function Card() {
  return (
    <div className="border border-red-600 bg-gray-800 rounded-lg p-1">
      <img src={monster} alt="monster" className="w-full rounded-t-lg" />
      <div>
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-white">Kong Boy</h1>

            <div className="flex flex-row justify-between gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="text-white">Giant</div>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <div className="text-white">6</div>
            </div>

            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z" />
              </svg>
              <div className="text-white">5</div>
            </div>

            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
              </svg>
              <div className="text-white">8</div>
            </div>
          </div>

          <h2 className="text-white mt-4">Attributes</h2>
          <div className="flex flex-row flex-wrap gap-4 mt-4">
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Strength
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Destruction
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Powerful
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Tall
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Destruction
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Powerful
            </div>
            <div className="flex-none text-white bg-gray-500 rounded-full px-4">
              Tall
            </div>
          </div>
          <h2 className="text-white mt-4">Fusion Bonus</h2>
          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
