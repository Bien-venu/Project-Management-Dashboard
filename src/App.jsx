import ProjectList from "./components/ProjectList";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import Top from "./components/Top";

const App = () => {
  return (
    <div className=" flex w-full h-screen flex-col tracking-tight">
      <Top />
      <Title />
      <Tasks />
      <ProjectList />
    </div>
  );
};

export default App;
