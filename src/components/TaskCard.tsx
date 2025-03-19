import classNames from "classnames";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
import more from "../assets/icons/more.png";
import { Task } from "../types/globalTypes";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import toast from "react-hot-toast";
import { deleteTask, toggleStatus } from "../redux/taskReducerSlice";
import { color } from "../utils/variables";
import { useState } from "react";

interface Props {
  task: Task;
  index: number;
}

interface IStatus {
  name: string;
  status: "todo" | "in-progress" | "done";
}

const status: IStatus[] = [
  {
    name: "To Do",
    status: "todo",
  },
  {
    name: "In Progress",
    status: "in-progress",
  },
  {
    name: "Done",
    status: "done",
  },
];

export default function TaskCard({ task, index }: Props) {
  const dispatch = useDispatch();
  const [showToggle, setShowToggle] = useState(false);

  return (
    <div
      className={`relative h-52 rounded-lg px-4 py-4 flex flex-col justify-between  ${
        color[index || Math.round(Math.random() * 18) + 1]
      }`}
    >
      <img
        src={more}
        className="absolute top-4 right-2 w-4 h-4 cursor-pointer"
        onClick={() => {
          setShowToggle(!showToggle);
        }}
      />
      {showToggle && (
        <ul className="absolute top-10 right-2 space-y-3 text-xs bg-white rounded-md pl-2 pr-8  py-2 shadow-md">
          {status.map((item) => (
            <li
              className="cursor-pointer w-full hover:font-semibold text-black"
              onClick={() => {
                dispatch(toggleStatus({ id: task.id, status: item.status }));
                setShowToggle(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}

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
