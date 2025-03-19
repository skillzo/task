import classNames from "classnames";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";

interface Props {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
}

export default function TaskCard({
  title,
  description: content,
  status,
}: Props) {
  return (
    <div className="bg-orange-200 h-52 rounded-lg px-4 py-4 flex flex-col justify-between">
      <div>
        <p className="text-xl font-bold font-poppins">{title}</p>

        <p className="mt-3 text-xs pl-1">{content}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img src={edit} className="w-4 h-4 cursor-pointer" />
          <img src={deleteIcon} className="w-4 h-4 cursor-pointer" />
        </div>

        <div className="flex justify-center items-center gap-0.5">
          <div
            className={classNames("w-2 h-2 rounded-full", {
              "bg-gray-500": status === "todo",
              "bg-orange-500": status === "in-progress",
              "bg-green-500": status === "done",
            })}
          />
          <p
            className={classNames("text-xs uppercase", {
              "text-gray-500": status === "todo",
              "text-orange-500": status === "in-progress",
              "text-green-500": status === "done",
            })}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
