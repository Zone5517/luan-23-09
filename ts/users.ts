import { getToken } from "./token.js";

export async function loadUsers(offset: number, limit: number) {
  const res = await fetch(`http://localhost:8080/api/users?offset=${offset}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });

  if (!res.ok) {
    alert("Erro ao buscar usuários");
    return;
  }

  const data = await res.json();
  renderUsers(data);
}

function renderUsers(users: any[]) {
  const container = document.getElementById("users-list")!;
  container.innerHTML = "";

  users.forEach((u) => {
    const div = document.createElement("div");
    div.textContent = `${u.id} - ${u.name} (${u.email})`;
    container.appendChild(div);
  });
}
