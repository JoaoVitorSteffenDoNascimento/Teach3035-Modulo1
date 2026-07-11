const box = document.getElementById('box');
const btn = document.getElementById('btn');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];

btn.addEventListener('click', function() {
  const num = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[num];
});