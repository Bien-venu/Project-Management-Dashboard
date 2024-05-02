import Card from "./Card";
import { useDataContext } from "../context/AppContext";

const ProjectList = () => {
  const { data, isLoading } = useDataContext();

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className=" flex-1 overflow-auto p-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data.todos.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectList;
