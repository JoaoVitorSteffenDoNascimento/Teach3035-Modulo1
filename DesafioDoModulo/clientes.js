let clientes = localStorage.getItem('clientes');
clientes = clientes ? JSON.parse(clientes) : [];

const lista = document.getElementById('listaClientes');
const msgVazio = document.getElementById('msgVazio');

if (clientes.length === 0) {
  msgVazio.textContent = 'Nenhum cliente cadastrado ainda.';
}

for (let i = 0; i < clientes.length; i++) {
  const c = clientes[i];

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = '<h3>' + c.animalNome + '</h3><p>' + c.dataAtendimento + '</p>';

  card.addEventListener('click', function() {
    abrirModal(c);
  });

  lista.appendChild(card);
}

const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fecharModal');

function abrirModal(c) {
  document.getElementById('mTutorNome').textContent = c.tutorNome;
  document.getElementById('mTutorTelefone').textContent = c.tutorTelefone;
  document.getElementById('mTutorEndereco').textContent = c.tutorEndereco;
  document.getElementById('mData').textContent = c.dataAtendimento;
  document.getElementById('mAnimalIdade').textContent = c.animalIdade;
  document.getElementById('mAnimalPorte').textContent = c.animalPorte;

  modal.classList.remove('escondido');
}

fecharModal.addEventListener('click', function() {
  modal.classList.add('escondido');
});
