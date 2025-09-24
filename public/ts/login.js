var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadUsers } from "./users.js";
import { setToken } from "./token.js";
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
        const res = yield fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (!res.ok)
            throw new Error("Login falhou");
        const data = yield res.json();
        setToken(data.token);
        // Mostrar tela de usuários
        document.getElementById("login-section").style.display = "none";
        document.getElementById("users-section").style.display = "block";
        // Carregar usuários
        loadUsers(0, 10);
    }
    catch (err) {
        alert("Erro no login: " + err);
    }
}));
