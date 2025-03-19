import classNames from "classnames";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
import { IStore, Task } from "../types/globalTypes";
import { deleteTask, updateTask } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import toast from "react-hot-toast";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="bg-orange-200 h-52 rounded-lg px-4 py-4 flex flex-col justify-between">
      <div>
        <p className="text-xl font-bold font-poppins">{task.title}</p>

        <p className="mt-3 text-xs pl-1 max-h-[100px] overflow-y-auto">
          {task.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img
            src={edit}
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              dispatch(openModal({ modalType: "EDIT_TASK", modalProps: task }));
            }}
          />
          <img
            src={deleteIcon}
            className="w-4 h-4 cursor-pointer"
            onClick={() => {
              dispatch(deleteTask({ id: task.id }));
              toast.success("Task deleted successfully!");
            }}
          />
        </div>

        <div className="flex justify-center items-center gap-0.5">
          <div
            className={classNames("w-2 h-2 rounded-full", {
              "bg-gray-500": task.status === "todo",
              "bg-orange-500": task.status === "in-progress",
              "bg-green-500": task.status === "done",
            })}
          />
          <p
            className={classNames("text-xs uppercase", {
              "text-gray-500": task.status === "todo",
              "text-orange-500": task.status === "in-progress",
              "text-green-500": task.status === "done",
            })}
          >
            {task.status}
          </p>
        </div>
      </div>
    </div>
  );
}
