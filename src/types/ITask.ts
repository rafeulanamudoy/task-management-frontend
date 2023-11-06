export type ITask = {
  title: string;
  description: string;
  userEmail?: string;
  status: string;
  _id?: string;
};
export type ITaskCartProps = {
  task: ITask;
};

export type ITaskResponse = {
  task: ITask;
};
export type ITaskFilter = {
  filters: {
    status: string;
    sort: string;
  };
  search?: string;
};
