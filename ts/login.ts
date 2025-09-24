import { loadUsers } from "./users.js";
import { setToken } from "./token.js";

const loginForm = document.getElementById("login-form") as HTMLFormElement;

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  try {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) throw new Error("Login falhou");

    const data = await res.json();
    setToken(data.token);

    // Mostrar tela de usuários
    document.getElementById("login-section")!.style.display = "none";
    document.getElementById("users-section")!.style.display = "block";

    // Carregar usuários
    loadUsers(0, 10);
  } catch (err) {
    alert("Erro no login: " + err);
  }
});
