"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_js_1 = require("./users.js");
const token_js_1 = require("./token.js");
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
        const res = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (!res.ok)
            throw new Error("Login falhou");
        const data = await res.json();
        (0, token_js_1.setToken)(data.token);
        // Mostrar tela de usuários
        document.getElementById("login-section").style.display = "none";
        document.getElementById("users-section").style.display = "block";
        // Carregar usuários
        (0, users_js_1.loadUsers)(0, 10);
    }
    catch (err) {
        alert("Erro no login: " + err);
    }
});
//# sourceMappingURL=login.js.map