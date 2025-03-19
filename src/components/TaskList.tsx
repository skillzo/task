import { useSelector } from "react-redux";
import { Task } from "../types/globalTypes";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const taskList: Task[] = useSelector(
    (store: { task: { task: Task[] } }) => store.task.task
  );

  return (
    <>
      <div className="max-w-[1000px] mx-auto grid gird-cols-1 md:grid-cols-3 gap-6 mt-[5%] p-6 rounded-lg">
        {taskList.map((task, idx) => (
          <TaskCard key={task.id} task={task} index={idx} />
        ))}
      </div>
    </>
  );
}
