const reconstrucao = [
  "Bicarbonato de sódio",
  "Microbrushed",
  "Micropore Nexcare",
  "Kit pós Procedimento curativo",
  "Oculos de proteção",
  "Fita adesiva",
  "Pasta com termos Recontrução",
  "Campo SMS",
  "Pote Dappen",
  "Vazilina solida",
  "Acído Tricloroacetico 90%",
  "Bandagem Cortada",

];

const checklist = document.getElementById('checklist');

reconstrucao.forEach(item => {
  const box = document.createElement('div');
  box.classList.add('item-box');
  box.textContent = item;

  box.onclick = () => {
    // Marca apenas se ainda não estiver marcado
    if (!box.classList.contains('checked')) {
      box.classList.add('checked');
      verificarTodosSelecionados();
    }
  };

  checklist.appendChild(box);
});

function verificarTodosSelecionados() {
  const itens = document.querySelectorAll('.item-box');
  const todosMarcados = [...itens].every(item => item.classList.contains('checked'));

  if (todosMarcados) {
    mostrarParabens();
  }
}

function mostrarParabens() {
  // Evita duplicar a mensagem
  if (document.getElementById('parabens-msg')) return;

  const msg = document.createElement('div');
  msg.id = 'parabens-msg';
  msg.innerHTML = "🎉 Todos os itens selecionados! 🎉";
  msg.classList.add('parabens');
  document.body.appendChild(msg);

  // Fogos de artifício
  for (let i = 0; i < 15; i++) {
    const fogo = document.createElement('div');
    fogo.classList.add('fogo');
    fogo.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(fogo);
    setTimeout(() => fogo.remove(), 2000);
  }

  setTimeout(() => {
    msg.remove();
  }, 10000);
}
