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
const uploadForm = document.getElementById("upload-form");
uploadForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    e.preventDefault();
    const fileInput = document.getElementById("file-input");
    const file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file)
        return alert("Selecione um arquivo!");
    const formData = new FormData();
    formData.append("image", file);
    const res = yield fetch("http://localhost:8080/api/users/image", {
        method: "POST",
        headers: { Authorization: `Bearer ${getToken()}` },
        body: formData
    });
    if (res.ok) {
        alert("Upload realizado com sucesso!");
    }
    else {
        alert("Erro no upload.");
    }
}));
