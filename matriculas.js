const form = document.getElementById("formMatricula");
const lista = document.getElementById("listaMatriculas");
const matriculas = JSON.parse(localStorage.getItem("matriculas") || "[]");

function renderMatriculas() {
    lista.innerHTML = "";
    matriculas.forEach((matricula, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1} - Aluno ${matricula.alunoId}, Curso ${matricula.cursoId}`;
        lista.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const alunoId = document.getElementById("alunoId").value;
    const cursoId = document.getElementById("cursoId").value;
    matriculas.push({ alunoId, cursoId });
    localStorage.setItem("matriculas", JSON.stringify(matriculas));
    renderMatriculas();
    form.reset();
});

renderMatriculas();
