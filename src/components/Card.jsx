/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import image1 from "../assets/AirBrush_20230329214112.jpg";
import image2 from "../assets/AirBrush_20230602184435.jpg";
import image3 from "../assets/Bienvenu.jpg";
import Dropdown from "./Dropdown";

const Card = ({ data }) => {
  
  const handleDelete = (id) => {
    console.log(id, data);

    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Todo item with ID ${id} deleted successfully.`);
        } else {
          toast.error("Failed to delete todo item.");
        }
      })
      .catch((error) => {
        toast.error("Error deleting todo item:", error);
      });
  };
  // const hasAttribute = Object.prototype.hasOwnProperty.call(data, "isDeleted");

  return (
    <div className=" flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        {data.completed ? (
          <div className="flex h-8 items-center justify-center rounded-lg bg-completeBg px-3 text-xs font-semibold text-complete">
            Completed
          </div>
        ) : (
          <div className="flex h-8 items-center justify-center rounded-lg bg-onprogressBg px-3 text-xs font-semibold text-onprogress">
            In Progress
          </div>
        )}
        <Dropdown handleDelete={handleDelete} id={data.id} />
      </div>
      <main className=" flex max-h-12 min-h-12 flex-1 flex-col gap-1">
        <h1 className=" text-xs font-semibold">{data.todo}</h1>
      </main>
      <footer className="flex flex-wrap justify-between gap-2 border-t pt-3 text-center">
        <div className="flex -space-x-2 rtl:space-x-reverse">
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
        </div>
        <div className="flex items-center gap-1 font-semibold text-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={17}
            height={17}
            fill={"none"}
          >
            <path
              d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className=" text-xs">3</span>
        </div>
      </footer>
    </div>
  );
};

export default Card;
