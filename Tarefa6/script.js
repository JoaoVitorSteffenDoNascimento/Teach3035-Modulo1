let tarefas = [];

function adicionarTarefa() {
    let nome = document.getElementById("tarefa").value;

    if (nome === "") {
        return;
    }

    let tarefa = {
        nome: nome,
        data: new Date().toLocaleDateString(),
        concluida: false
    };

    tarefas.push(tarefa);
    document.getElementById("tarefa").value = "";
    mostrarTarefas(tarefas);
}

function concluirTarefa(indice) {
    tarefas[indice].concluida = true;
    mostrarTarefas(tarefas);
}

function listarPendentes() {
    let pendentes = tarefas.filter(tarefa => tarefa.concluida === false);
    mostrarTarefas(pendentes);
}

function mostrarTarefas(lista) {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    lista.forEach(function(tarefa) {
        let li = document.createElement("li");

        li.innerHTML = `
            ${tarefa.nome} - ${tarefa.data}
            <button onclick="concluirTarefa(${tarefas.indexOf(tarefa)})">Concluir</button>
        `;

        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        ul.appendChild(li);
    });
}