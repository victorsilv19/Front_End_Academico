const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
const cursos = JSON.parse(localStorage.getItem("cursos") || "[]");
const matriculas = JSON.parse(localStorage.getItem("matriculas") || "[]");

const alunoForm = document.getElementById("formAluno");
const cursoForm = document.getElementById("formCurso");
const matriculaForm = document.getElementById("formMatricula");

function atualizarListas() {
  const listaAlunos = document.getElementById("listaAlunos");
  listaAlunos.innerHTML = "";
  alunos.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = `#${i + 1} - ${a.nome} (${a.email})`;
    listaAlunos.appendChild(li);
  });

  const listaCursos = document.getElementById("listaCursos");
  listaCursos.innerHTML = "";
  cursos.forEach((c, i) => {
    const li = document.createElement("li");
    li.textContent = `#${i + 1} - ${c.nomeCurso} (${c.cargaHoraria}h)`;
    listaCursos.appendChild(li);
  });

  const listaMatriculas = document.getElementById("listaMatriculas");
  listaMatriculas.innerHTML = "";
  matriculas.forEach((m, i) => {
    const aluno = alunos[m.aluno];
    const curso = cursos[m.curso];
    const li = document.createElement("li");
    li.textContent = `#${i + 1} - ${aluno?.nome || 'Aluno N/D'} matriculado em ${curso?.nomeCurso || 'Curso N/D'}`;
    listaMatriculas.appendChild(li);
  });

  const alunoSelect = document.getElementById("alunoSelect");
  alunoSelect.innerHTML = alunos.map((a, i) => `<option value="${i}">${a.nome}</option>`).join("");

  const cursoSelect = document.getElementById("cursoSelect");
  cursoSelect.innerHTML = cursos.map((c, i) => `<option value="${i}">${c.nomeCurso}</option>`).join("");
}

alunoForm.onsubmit = (e) => {
  e.preventDefault();
  alunos.push({
    nome: alunoForm.nome.value,
    email: alunoForm.email.value,
    cpf: alunoForm.cpf.value,
    telefone: alunoForm.telefone.value
  });
  localStorage.setItem("alunos", JSON.stringify(alunos));
  alunoForm.reset();
  atualizarListas();
};

cursoForm.onsubmit = (e) => {
  e.preventDefault();
  cursos.push({
    nomeCurso: cursoForm.nomeCurso.value,
    cargaHoraria: cursoForm.cargaHoraria.value,
    ementa: cursoForm.ementa.value
  });
  localStorage.setItem("cursos", JSON.stringify(cursos));
  cursoForm.reset();
  atualizarListas();
};

matriculaForm.onsubmit = (e) => {
  e.preventDefault();
  matriculas.push({
    aluno: Number(matriculaForm.alunoSelect.value),
    curso: Number(matriculaForm.cursoSelect.value)
  });
  localStorage.setItem("matriculas", JSON.stringify(matriculas));
  matriculaForm.reset();
  atualizarListas();
};

atualizarListas();
