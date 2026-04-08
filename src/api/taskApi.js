const STORAGE_KEY = "tasks";

export const getTasks = () => {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (task) => {
  const tasks = getTasks();
  const updated = [...tasks, task];
  saveTasks(updated);
  return updated;
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const updated = tasks.filter((task) => task.id !== id);
  saveTasks(updated);
  return updated;
};

export const updateTask = (id, updatedTask) => {
  const tasks = getTasks();
  const updated = tasks.map((task) =>
    task.id === id ? { ...task, ...updatedTask } : task,
  );
  saveTasks(updated);
  return updated;
};
