import { getToken } from "./token.js";

const uploadForm = document.getElementById("upload-form") as HTMLFormElement;

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("file-input") as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (!file) return alert("Selecione um arquivo!");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:8080/api/users/image", {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData
  });

  if (res.ok) {
    alert("Upload realizado com sucesso!");
  } else {
    alert("Erro no upload.");
  }
});
