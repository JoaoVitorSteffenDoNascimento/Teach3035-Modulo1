const produtos = [
  { nome: 'Ração Golden Cães 15kg', imagem: 'RaçãoGolden15kg.jpg', valor: 149.90 },
  { nome: 'Ração Golden Gatos 3kg', imagem: 'RaçãoGolden3kg.png', valor: 29.90 },
  { nome: 'Coleira Ajustável', imagem: 'ColeiraAjustavel.jpg', valor: 39.90 },
  { nome: 'Brinquedo Mordedor', imagem: 'Mordedor.jpg', valor: 19.90 },
  { nome: 'Shampoo Pet', imagem: 'ShampooPet.webp', valor: 24.90 },
  { nome: 'Caminha para Pet', imagem: 'Caminha.jpg', valor: 89.90 }
];

const lista = document.getElementById('listaProdutos');
const msg = document.getElementById('msgCarrinho');

for (let i = 0; i < produtos.length; i++) {
  const p = produtos[i];

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = '<img src="' + p.imagem + '"><h3>' + p.nome + '</h3><p>R$ ' + p.valor.toFixed(2) + '</p>';

  card.addEventListener('click', function() {
    adicionarAoCarrinho(p);
  });

  lista.appendChild(card);
}

function adicionarAoCarrinho(produto) {
  let carrinho = localStorage.getItem('carrinho');
  carrinho = carrinho ? JSON.parse(carrinho) : [];

  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  msg.textContent = produto.nome + ' foi adicionado ao carrinho de compras!';
}
