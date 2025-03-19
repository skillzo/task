import { useDispatch, useSelector } from "react-redux";
import { Task } from "../types/globalTypes";
import TaskCard from "./TaskCard";
import { reorderTasks } from "../redux/taskReducerSlice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function TaskList() {
  const dispatch = useDispatch();
  const taskList: Task[] = useSelector(
    (store: { task: { task: Task[] } }) => store.task.task
  );
  const moveTask = (fromIndex: number, toIndex: number) => {
    dispatch(reorderTasks({ fromIndex, toIndex }));
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="max-w-[1000px] mx-auto grid gird-cols-1 md:grid-cols-3 gap-6 mt-[5%] p-6 rounded-lg">
          {taskList.map((task, idx) => (
            <TaskCard
              key={task.id}
              task={task}
              index={idx}
              moveTask={moveTask}
            />
          ))}
        </div>
      </DndProvider>
    </>
  );
}
