import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      isEditing: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEdit = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo,
      ),
    );
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const saveEdit = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo,
      ),
    );
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => updateTodo(todo.id, e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => startEdit(todo.id)}>Edit</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
