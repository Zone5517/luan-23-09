var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getToken } from "./token.js";
export function loadUsers(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:8080/api/users?offset=${offset}&limit=${limit}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        });
        if (!res.ok) {
            alert("Erro ao buscar usuários");
            return;
        }
        const data = yield res.json();
        renderUsers(data);
    });
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
