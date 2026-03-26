import { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        {
          text: input,
          completed: false,
          date: new Date().toLocaleString(),
        },
      ]);
    }
    setInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.completed);

  return (
    <div className="section todo-section">
      <h2>Todo List</h2>

      {/* Input */}
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      {/* Filter */}
      <div className="todo-filter">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>

      {/* Tasks */}
      <ul className="todo-list">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-info">
              <span>{task.text}</span>
              <small>{task.date}</small>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "↩️" : "✅"}
              </button>
              <button onClick={() => editTask(index)}>✏️</button>
              <button onClick={() => deleteTask(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;