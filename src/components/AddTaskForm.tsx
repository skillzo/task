import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducer";
import toast from "react-hot-toast";

export default function AddTaskForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.title.trim() || !content.description.trim()) {
      toast.error("Both title and description are required!");
      return;
    }

    dispatch(
      addTask({
        id: Date.now().toString(),
        status: "todo",
        ...content,
      })
    );

    setContent({ title: "", description: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <h2 className="font-poppins text-center">Add Task</h2>

        <div className="space-y-4 mt-4">
          <div>
            <label htmlFor="title" className="text-xs font-semibold ">
              Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={content.title}
              className="text-xs border border-gray-200 px-2 py-1 rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="title" className="text-xs font-semibold ">
              Title
            </label>

            <textarea
              name="description"
              placeholder="Task Description"
              value={content.description}
              onChange={handleChange}
              className="text-xs border border-gray-200 px-2 py-1 rounded w-full min-h-[100px] !resize-none"
            />
          </div>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
