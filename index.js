const itens = [
  "Álcool gel",
  "Almofada",
  "Anestésico",
  "Aplicador Studex",
  "Brinco Adulto & Baby",
  "Caixa Ruído Branco",
  "Caneta Certificado",
  "Caneta Vibratória",
  "Caneta de Marcação",
  "Clorexidina alcoólica, degermante e aquosa",
  "Descarpack",
  "Dispo Ice Gelo",
  "Espelho",
  "Esponja Vibratória",
  "Germi Rio",
  "Jaleco",
  "Kit Adulto",
  "Kit Baby",
  "Kit piercing e brincos Studex",
  "Lanterna",
  "Luva de procedimento média sem pó",
  "Micropore",
  "Orelha Pró",
  "Orelha anatômica",
  "Paquímetro",
  "Pasta com termos e caneta",
  "Piercing Bioflex",
  "Piercing de Atualização",
  "Piercímetro",
  "Pilha",
  "Pinça Kelly",
  "Pinça aberta",
  "Plástico filme",
  "Pote Taper sujo",
  "Pote com gaze não estéril",
  "Pote com palito e cotonete",
  "Propé",
  "Rolo de plástico",
  "Rolo lençol de maca",
  "Saco de organza",
  "Semijoias",
  "Soro Fisiológico",
  "Swab de álcool",
  "Tesoura",
  "Toalha rosa"
];


const checklist = document.getElementById('list');

itens.forEach((nome) => {
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
  const itens = document.querySelectorAll('.item-box');
  const todosMarcados = [...itens].every(item => item.classList.contains('checked'));

  if (todosMarcados) {
    mostrarParabens();
  }
}

const mostrarParabens = () => {
  if (document.getElementById('parabens-msg')) return;

  const msg = document.createElement('div');
  msg.id = 'parabens-msg';
  msg.innerHTML = "🎉 Parabéns! Todos os itens selecionados! 🎉";
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
