const Chart = () => {
  return (
    <div className=" flex h-screen w-[30rem] flex-col gap-4 bg-white p-5 shadow-xl ">
      <div className="flex items-center justify-between text-sm font-semibold tracking-tighter">
        <h1>Project Overview</h1>
        <span className=" text-xs text-grey ">See all</span>
      </div>
      <div className=" h-44 rounded-lg bg-background"></div>
    </div>
  );
};

export default Chart;
