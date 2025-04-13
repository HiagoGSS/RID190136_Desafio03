const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const counter = document.getElementById('task-counter');

let tarefas = [
  { nome: "Implementar tela de listagem de tarefas", etiqueta: "frontend", data: "21/08/2024", concluida: false },
  { nome: "Criar endpoint para cadastro de tarefas", etiqueta: "backend", data: "21/08/2024", concluida: false },
  { nome: "Implementar protótipo da listagem de tarefas", etiqueta: "ux", data: "21/08/2024", concluida: true }
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('task-name').value;
  const etiqueta = document.getElementById('task-tag').value;
  tarefas.push({ nome, etiqueta, data: new Date().toLocaleDateString(), concluida: false });
  form.reset();
  renderizarTarefas();
});

function renderizarTarefas() {
  taskList.innerHTML = '';
  let countConcluidas = 0;

  tarefas.forEach((tarefa, index) => {
    const div = document.createElement('div');
    div.className = `task ${tarefa.concluida ? 'completed' : ''}`;

    div.innerHTML = `
      <div class="info">
        <span class="tag">${tarefa.etiqueta}</span>
        <strong class="title">${tarefa.nome}</strong>
        <span>Criado em: ${tarefa.data}</span>
      </div>
      ${
        tarefa.concluida
          ? `<span>✔️</span>`
          : `<button onclick="concluirTarefa(${index})">Concluir</button>`
      }
    `;

    taskList.appendChild(div);
    if (tarefa.concluida) countConcluidas++;
  });

  counter.textContent = `${countConcluidas} tarefa${countConcluidas !== 1 ? 's' : ''} concluída${countConcluidas !== 1 ? 's' : ''}`;
}

function concluirTarefa(index) {
  tarefas[index].concluida = true;
  renderizarTarefas();
}

document.addEventListener('DOMContentLoaded', renderizarTarefas);
