import Card from "./Card";
import { useDataContext } from "../context/AppContext";

const ProjectList = () => {
  const { data, isLoading, selectedTasks } = useDataContext();

  const filter =
    !isLoading &&
    data.todos.filter((item) =>
      selectedTasks === "All Tasks"
        ? item
        : item.completed === (selectedTasks === "Completed"),
    );

  return (
    <>
      {isLoading ? (
        <div className="item flex flex-1 items-center justify-center">
          <i className="loader --5"></i>
        </div>
      ) : (
        <div className=" grid flex-1 grid-cols-1 gap-2 overflow-auto p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filter.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectList;
