import "./App.css";
import AddTask from "./components/AddTaskForm";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import addIcon from "./assets/icons/add-task.png";

function App() {
  return (
    <>
      {/* <AddTask /> */}

      <div>
        <div className="border-b border-gray-300 mt-[3%] pb-2">
          <div className=" flex justify-between items-center w-[80%] mx-auto">
            <p className="text-3xl font-semibold font-poppins">My Tasks</p>

            <button className="bg-slate-900 text-white py-3 px-8 rounded text-sm ">
              <img src={addIcon} className="w-4 h-4 cursor-pointer" />
              <p>Add Task</p>
            </button>
          </div>
        </div>

        <TaskList />
      </div>
    </>
  );
}

export default App;
