export interface User {
  name: string;
  src: string;
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

export interface Task {
  id: number;
  name: string;
  assignee: User;
  description?: string;
  status: Status;
}

export interface TaskCardProps {
  task: Task;
  onAssign?: (user: User) => void;
  onToggleStatus?: (status: Status) => void;
  onEdit?: (task: Task) => void;
  onRemove?: (id: number) => void;
}
