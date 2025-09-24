"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUsers = loadUsers;
const token_js_1 = require("./token.js");
async function loadUsers(offset, limit) {
    const res = await fetch(`http://localhost:8080/api/users?offset=${offset}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${(0, token_js_1.getToken)()}` }
    });
    if (!res.ok) {
        alert("Erro ao buscar usuários");
        return;
    }
    const data = await res.json();
    renderUsers(data);
}
function renderUsers(users) {
    const container = document.getElementById("users-list");
    container.innerHTML = "";
    users.forEach((u) => {
        const div = document.createElement("div");
        div.textContent = `${u.id} - ${u.name} (${u.email})`;
        container.appendChild(div);
    });
}
//# sourceMappingURL=users.js.map