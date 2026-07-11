const form = document.getElementById('formCadastro');
const msg = document.getElementById('msgCadastro');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const cliente = {
    tutorNome: document.getElementById('tutorNome').value,
    tutorTelefone: document.getElementById('tutorTelefone').value,
    tutorEndereco: document.getElementById('tutorEndereco').value,
    dataAtendimento: document.getElementById('dataAtendimento').value,
    animalNome: document.getElementById('animalNome').value,
    animalIdade: document.getElementById('animalIdade').value,
    animalPorte: document.getElementById('animalPorte').value
  };

  let clientes = localStorage.getItem('clientes');
  clientes = clientes ? JSON.parse(clientes) : [];

  clientes.push(cliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));

  msg.textContent = 'Cliente cadastrado com sucesso!';
  form.reset();
});
