import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/taskReducerSlice";
import toast from "react-hot-toast";
import Button from "./button/Button";
import { IStore } from "../types/globalTypes";
import { closeModal } from "../redux/modalSlice";

export default function EditTaskForm() {
  const dispatch = useDispatch();

  const { modalProps } = useSelector((state: IStore) => state.modal);

  const [content, setContent] = useState({
    title: modalProps.title,
    description: modalProps.description,
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
    toast.success("Task updated successfully!");
    dispatch(
      updateTask({
        ...modalProps,
        title: content.title,
        description: content.description,
      })
    );
    dispatch(closeModal());

    setContent({ title: "", description: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <h2 className="font-poppins text-center">Add Task</h2>

        <div className="space-y-4 mt-2">
          <div>
            <label htmlFor="title" className="text-xs font-semibold ">
              Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={content.title}
              className="text-xs border border-gray-200 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="title" className="text-xs font-semibold ">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Task Description"
              value={content.description}
              onChange={handleChange}
              className="text-xs border border-gray-200 p-2 rounded w-full min-h-[100px] !resize-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full !bg-gray-500 ">
            <p>Update Task</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
