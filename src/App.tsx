import "./App.css";
import AddTask from "./components/AddTaskForm";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import addIcon from "./assets/icons/add-task.png";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [addTask, setAddTask] = useState(false);
  return (
    <>
      <Modal open={addTask} onClose={() => setAddTask(false)}>
        <AddTask />
      </Modal>

      <div>
        <div className="border-b border-gray-300 mt-[3%] pb-2">
          <div className=" flex justify-between items-center w-[80%] mx-auto">
            <p className="text-3xl font-semibold font-poppins">My Tasks</p>

            <Button onClick={() => setAddTask(true)}>
              <div className="flex items-center gap-2">
                <img src={addIcon} className="w-4 h-4" />
                <p>Add Task</p>
              </div>
            </Button>
          </div>
        </div>

        <TaskList />
      </div>
    </>
  );
}

export default App;
