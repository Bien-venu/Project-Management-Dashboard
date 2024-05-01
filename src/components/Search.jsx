const Search = () => {
  return (
    <div className="flex w-80 items-center justify-between rounded-lg bg-navbar p-2 px-4 text-xs font-medium text-grey">
      <input
        type="text"
        placeholder="Search"
        className=" w-64 bg-transparent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={17}
        height={17}
        fill={"none"}
      >
        <path
          d="M17.5 17.5L22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Search;
