import image1 from "../assets/AirBrush_20230329214112.jpg";
import image2 from "../assets/AirBrush_20230602184435.jpg";
import image3 from "../assets/Bienvenu.jpg";

const Team = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-4 border-b py-8">
      <li className="relative  h-6 w-6 overflow-hidden 2xl:h-7 2xl:w-7">
        <img
          src={image1}
          alt="members"
          className=" h-full w-full rounded-full object-cover"
        />
        <span className=" absolute right-0 top-0 h-2 w-2 rounded-full border border-white bg-active"></span>
      </li>
      <li className="relative h-6 w-6 overflow-hidden 2xl:h-7 2xl:w-7">
        <img
          src={image2}
          alt="members"
          className=" h-full w-full rounded-full object-cover"
        />
        <span className=" absolute right-0 top-0 h-2 w-2 rounded-full border border-white bg-active"></span>
      </li>
      <li className="relative h-6 w-6 overflow-hidden 2xl:h-7 2xl:w-7">
        <img
          src={image3}
          alt="members"
          className=" h-full w-full rounded-full object-cover"
        />
      </li>
      <li className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-dashed 2xl:h-7 2xl:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={12}
          height={12}
          color={"#000000"}
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
      </li>
    </ul>
  );
};

export default Team;
