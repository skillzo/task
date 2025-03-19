import { useSelector } from "react-redux";
import { Task } from "../types/globalTypes";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const taskList: Task[] = useSelector(
    (store: { task: { task: Task[] } }) => store.task.task
  );

  return (
    <>
      <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 mt-[5%] p-6 rounded-lg">
        {taskList.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </>
  );
}
