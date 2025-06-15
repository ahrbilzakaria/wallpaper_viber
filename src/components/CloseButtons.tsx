import { X } from "lucide-react";


const CloseButtons = () => {
  return (
    <div className=" h-full justify-end flex leading-[30px] dark:bg-main-dark no-drag ">
      <button
        onClick={() => window?.electron?.minimize()}
        className="px-4 py-3 flex justify-center items-center  dark:hover:bg-[#333333aa] hover:bg-[#eaeaea]   transition-colors duration-200 ease-in-out"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-300 "
        >
          <path d="M15 8H1V7h14v1z"></path>
        </svg>
      </button>
      <button
        onClick={() => window?.electron?.maximize()}
        className="px-4 py-3 flex justify-center items-center  dark:hover:bg-[#333333aa] hover:bg-[#eaeaea] dark:text-white fill-black transition-colors duration-200 ease-in-out"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-300 "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 4l.5-.5h8l.5.5v8l-.5.5H4l-.5-.5V4zm1 .5v7h7v-7h-7z"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => window?.electron?.close()}
        className=" px-4 py-3 flex justify-center items-center   dark:hover:bg-red-700 hover:bg-zinc-200  transition-colors duration-200 ease-in-out hover:bg-[#ff0000dd] dark:hover:bg-[#ff0000dd] "
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#0F1729"
          />
        </svg>
      </button>
    </div>
  );
};

export default CloseButtons;
