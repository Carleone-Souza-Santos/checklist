const kitlobulo = [
  "Gaze",
  "Lamina",
  "Kit Esteril",
  "Mascara",
  "Luva Esteril",
  "Toca",
  "Cateter 22",
  "Cateter 20",

];


const checklist = document.getElementById('list');

kitlobulo.forEach((nome) => {
  const div = document.createElement('div');
  div.classList.add('item-box');
  div.innerText = nome;

  div.addEventListener('click', () => {
    // Só marca se ainda não estiver marcado
    if (!div.classList.contains('checked')) {
      div.classList.add('checked');
      verificarSelecionados();
    }
  });

  checklist.appendChild(div);
});

const verificarSelecionados = () => {
  const kitlobulo = document.querySelectorAll('.item-box');
  const todosMarcados = [...kitlobulo].every(item => item.classList.contains('checked'));

  if (todosMarcados) {
    mostrarParabens();
  }
}

const mostrarParabens = () => {
  if (document.getElementById('parabens-msg')) return;

  const msg = document.createElement('div');
  msg.id = 'parabens-msg';
  msg.innerHTML = "🎉 Parabéns! kitlobulo Produzido! 🎉";
  msg.classList.add('parabens');
  document.body.appendChild(msg);

  // Criar fogos de artifício
  for (let i = 0; i < 15; i++) {
    const fogo = document.createElement('div');
    fogo.classList.add('fogo');
    fogo.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(fogo);
    setTimeout(() => fogo.remove(), 2000);
  }

  setTimeout(() => {
    msg.remove();
  }, 4000);
}
