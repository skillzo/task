// import { Task } from "../types/globalTypes";
// import {
//   addTask,
//   deleteTask,
//   persistedTaskReducer as taskReducer,
//   toggleStatus,
//   updateTask,
// } from "./taskReducerSlice";

// const initialState: { task: Task[]; _persist: any } = {
//   task: [
//     { id: "1", title: "Task 1", description: "First task", status: "todo" },
//     {
//       id: "2",
//       title: "Task 2",
//       description: "Second task",
//       status: "in-progress",
//     },
//   ],
// };

// describe("taskSlice Reducers", () => {
//   it("should add a new task", () => {
//     const newTask: Task = {
//       id: "3",
//       title: "Task 3",
//       description: "New task added",
//       status: "todo",
//     };

//     const newState = taskReducer(initialState, addTask(newTask));

//     expect(newState.task).toHaveLength(3);
//     expect(newState.task[2]).toEqual(newTask);
//   });

//   it("should update an existing task", () => {
//     const updatedTask = {
//       id: "1",
//       title: "Updated Task 1",
//       description: "Updated first task",
//     };

//     const newState = taskReducer(initialState, updateTask(updatedTask));

//     expect(newState.task[0].title).toBe("Updated Task 1");
//     expect(newState.task[0].description).toBe("Updated first task");
//   });

//   it("should delete a task by ID", () => {
//     const taskIdToDelete = "1";

//     const newState = taskReducer(
//       initialState,
//       deleteTask({ id: taskIdToDelete })
//     );

//     expect(newState.task).toHaveLength(1);
//     expect(
//       newState.task.find((task) => task.id === taskIdToDelete)
//     ).toBeUndefined();
//   });

//   it("should toggle the status of a task", () => {
//     const updatedStatus = { id: "1", status: "done" };

//     const newState = taskReducer(initialState, toggleStatus(updatedStatus));

//     expect(newState.task[0].status).toBe("done");
//   });
// });
