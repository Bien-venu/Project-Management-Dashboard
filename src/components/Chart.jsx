import image1 from "../assets/AirBrush_20230329214112.jpg";
import image2 from "../assets/AirBrush_20230602184435.jpg";
import image3 from "../assets/Bienvenu.jpg";
import TeamChart from "./TeamChart";

const Chart = () => {
  return (
    <div className=" min-w-1/4 flex h-screen w-1/4 flex-col gap-4 bg-white p-5 tracking-tighter shadow-xl">
      <div className="flex items-center justify-between text-sm font-semibold ">
        <h1>Project Overview</h1>
        <span className=" text-xs text-grey ">See all</span>
      </div>
      <div className=" relative flex h-40 flex-col justify-between rounded-lg bg-background p-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex w-28 items-center gap-2 text-sm font-medium text-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              fill={"none"}
            >
              <path
                d="M18 2V4M6 2V4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 8H20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Timeline:
          </span>
          <span className=" text-sm font-medium">Apr 14 -May 7</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex w-28 items-center gap-2 text-sm font-medium text-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              fill={"none"}
            >
              <path
                d="M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Team:
          </span>
          <span className=" text-sm font-semibold">
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
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex w-28 items-center gap-2 text-sm font-medium text-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              fill={"none"}
            >
              <path
                d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Status:
          </span>
          <span className=" text-sm font-medium">In Progress</span>
        </div>
        <span className="absolute left-0 top-10 h-1/2 w-1.5 rounded-r-full bg-blue"></span>
      </div>
      <TeamChart />
    </div>
  );
};

export default Chart;
