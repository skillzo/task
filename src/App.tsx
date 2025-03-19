import "./App.css";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import addIcon from "./assets/icons/add-task.png";
import Modal from "./components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "./redux/modalSlice";
import { IStore } from "./types/globalTypes";
import EditTaskForm from "./components/EditTaskForm";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: IStore) => state.modal);

  return (
    <>
      <Modal
        open={modalState.modalType === "ADD_TASK"}
        onClose={() => dispatch(closeModal())}
      >
        <AddTaskForm />
      </Modal>

      <Modal
        open={modalState.modalType === "EDIT_TASK"}
        onClose={() => dispatch(closeModal())}
      >
        <EditTaskForm />
      </Modal>

      <div>
        <div className="border-b border-gray-300 mt-[3%] pb-2">
          <div className=" flex justify-between items-center w-[80%] mx-auto">
            <p className="text-3xl font-semibold font-poppins">My Tasks</p>

            <Button
              onClick={() => dispatch(openModal({ modalType: "ADD_TASK" }))}
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
