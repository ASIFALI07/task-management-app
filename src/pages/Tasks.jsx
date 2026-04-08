import { useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../api/taskApi";

function Tasks() {
  const [tasks, setTasks] = useState(() => getTasks());
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (!newTask.trim()) return;

    const updated = addTask({ id: Date.now(), title: newTask });
    setTasks(updated);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTasks(deleteTask(id));
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.title);
  };

  const handleUpdate = () => {
    setTasks(updateTask(editId, { title: editText }));
    setEditId(null);
  };

  return (
    <div>
      <h2>Tasks</h2>

      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {editId === t.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                {t.title}
                <button onClick={() => handleEdit(t)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
