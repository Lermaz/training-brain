import express, { type Request, type Response } from "express";

const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];
let nextId = 1;

// POST /users
// - body: { name: string, email: string }
// - 400 si falta name o email, si no son strings, o si el email no contiene "@"
// - 409 si ya existe un usuario con ese email (sin distinguir mayúsculas)
// - 201 con el usuario creado si todo va bien


app.post("/users", (req: Request, res: Response) => {
  const { name, email } = (req.body ?? {}) as Partial<Record<"name" | "email", unknown>>;

  if (
    typeof name !== "string" || name.trim() === "" ||
    typeof email !== "string" || !email.includes("@")
  ) {
    return res.status(400).json({ error: "Invalid name or email" });
  }

  const normalized = email.toLowerCase();
  if (users.some(u => u.email.toLowerCase() === normalized)) {
    return res.status(409).json({ error: "User already exists" });
  }

  const user: User = { id: nextId++, name: name.trim(), email };
  users.push(user);
})

// GET /users/:id
// - 400 si id no es un entero válido
// - 404 si no existe
// - 200 con el usuario

app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);

  if (req.params.id.trim() === "" || !Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
})

app.listen(3000, () => {
  console.log(`Listening on port ${3000}...`);
});