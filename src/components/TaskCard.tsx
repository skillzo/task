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
import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

interface Props {
  task: Task;
  index: number;
  moveTask: (from: number, to: number) => void;
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

export default function TaskCard({ task, index, moveTask }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const [showToggle, setShowToggle] = useState(false);

  // dragging state
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // after drop
  const [, dropRef] = useDrop({
    accept: "TASK",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  dragRef(dropRef(ref));
  return (
    <div
      ref={ref}
      className={`relative h-52 rounded-lg px-4 py-4 flex flex-col justify-between shadow-md  ${
        color[index || Math.round(Math.random() * 18) + 1]
      } ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {/* toggle status button */}
      <button
        onClick={() => {
          setShowToggle(!showToggle);
        }}
      >
        <img src={more} className="absolute top-4 right-2 w-4 h-4" />
      </button>
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

      {/* action buttons */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => {
              dispatch(openModal({ modalType: "EDIT_TASK", modalProps: task }));
            }}
          >
            <img src={edit} className="w-4 h-4 cursor-pointer" />
          </button>
          <button
            onClick={() => {
              dispatch(deleteTask({ id: task.id }));
              toast.success("Task deleted successfully!");
            }}
          >
            <img src={deleteIcon} className="w-4 h-4 cursor-pointer" />
          </button>
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
