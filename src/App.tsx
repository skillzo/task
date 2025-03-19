import "./App.css";
import AddTask from "./components/AddTaskForm";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import addIcon from "./assets/icons/add-task.png";
import Modal from "./components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "./redux/modalSlice";
import { IStore } from "./types/globalTypes";

function App() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: IStore) => state.modal);

  console.log("modal", modalState);
  return (
    <>
      <Modal
        open={modalState.modalType === "ADD_TODO"}
        onClose={() => dispatch(closeModal())}
      >
        <AddTask />
      </Modal>

      <Modal
        open={modalState.modalType === "EDIT_TODO"}
        onClose={() => dispatch(closeModal())}
      >
        <AddTask />
      </Modal>

      <div>
        <div className="border-b border-gray-300 mt-[3%] pb-2">
          <div className=" flex justify-between items-center w-[80%] mx-auto">
            <p className="text-3xl font-semibold font-poppins">My Tasks</p>

            <Button
              onClick={() => dispatch(openModal({ modalType: "ADD_TODO" }))}
            >
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
