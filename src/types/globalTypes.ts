export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
}

export interface IAddTask {
  title: string;
  description: string;
}
export interface IUpdateTask {
  id: string;
  title: string;
  description: string;
}

export interface IDeleteTask {
  id: string;
}

export interface IModalState {
  modalType: string | null;
  modalProps?: any;
}

export interface IStore {
  modal: IModalState;
  task: Task[];
  theme: string;
}
