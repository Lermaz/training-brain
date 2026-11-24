import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export function TodoList({ userId }: { userId: number }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`/api/users/${userId}/todos`, { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<Todo[]>;
      })
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      });

    return () => controller.abort();
  }, [userId]);

  const toggle = (id: number) => {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const visible = todos.filter(t =>
    t.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <div>
      <input
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
      />
      <ul>
        {visible.map(t => (
          <li key={t.id} onClick={() => toggle(t.id)}>
            {t.title} {t.done ? "✓" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}