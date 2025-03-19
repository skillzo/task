import "./App.css";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import addIcon from "./assets/icons/add-task.png";
import light from "./assets/icons/light.png";
import dark from "./assets/icons/dark.png";
import Modal from "./components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "./redux/modalSlice";
import { IStore } from "./types/globalTypes";
import EditTaskForm from "./components/EditTaskForm";
import AddTaskForm from "./components/AddTaskForm";
import { toggleTheme } from "./redux/themeSlice";

function App() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: IStore) => state.modal);
  const themeState = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

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

      <div className={`dark:bg-black bg-gray-50  min-h-screen ${themeState}`}>
        <div className="border-b border-gray-300 pt-[3%] pb-2">
          <div className=" flex justify-between items-center w-[95%] md:w-[80%] mx-auto">
            <p className="text-3xl font-semibold font-poppins dark:text-white/90">
              My Tasks
            </p>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => dispatch(openModal({ modalType: "ADD_TASK" }))}
              >
                <div className="flex items-center gap-2">
                  <img src={addIcon} className="w-4 h-4" />
                  <p>Add Task</p>
                </div>
              </Button>

              {themeState === "light" ? (
                <img
                  src={dark}
                  className="w-8 h-8"
                  onClick={() => dispatch(toggleTheme())}
                />
              ) : (
                <img
                  src={light}
                  className="w-8 h-8"
                  onClick={() => dispatch(toggleTheme())}
                />
              )}
            </div>
          </div>
        </div>

        <TaskList />
      </div>
    </>
  );
}

export default App;
