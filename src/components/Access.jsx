import image1 from "../assets/AirBrush_20230329214112.jpg";
import image2 from "../assets/AirBrush_20230602184435.jpg";
import image3 from "../assets/Bienvenu.jpg";

const Access = () => {
  return (
    <div className="flex items-center gap-3 text-xs">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          fill={"none"}
          className=" text-grey"
        >
          <path
            d="M12 16.5V14.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className=" text-xs font-semibold">Limited access</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={18}
          height={18}
          className=" text-grey"
          fill={"none"}
        >
          <path
            d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex -space-x-2 border-l pl-3 rtl:space-x-reverse">
        <img
          className="h-6 w-6 rounded-full border border-white object-cover 2xl:h-7 2xl:w-7"
          src={image1}
          alt=""
        />
        <img
          className="h-6 w-6 rounded-full border border-white object-cover 2xl:h-7 2xl:w-7"
          src={image2}
          alt=""
        />
        <img
          className="h-6 w-6 rounded-full border border-white object-cover 2xl:h-7 2xl:w-7"
          src={image3}
          alt=""
        />
        <img
          className="h-6 w-6 rounded-full border border-white object-cover 2xl:h-7 2xl:w-7"
          src={image1}
          alt=""
        />
        <a
          className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-more text-xs font-medium text-white hover:bg-gray-700 2xl:h-7 2xl:w-7 "
          href="#"
        >
          +2
        </a>
      </div>
      <span className=" rounded-full bg-blue p-1 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={13}
          height={13}
          fill={"none"}
        >
          <path
            d="M12 4V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default Access;
