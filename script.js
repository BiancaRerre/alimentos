// ============================================================================
// Otimizações de UX, compatibilidade Mobile/Touch/S-Pen, Cronômetro,
// Revisão de Erros e Central de Ajuda por Bianca Rerre (https://github.com/BiancaRerre)
// Website: https://rerre.net/
// ============================================================================

// Firebase App (the core Firebase SDK) is always required and must be listed first
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmIFOOiaZJW8cQEvxuFijEm9qeLqvrFNs",
  authDomain: "alimentos-29ade.firebaseapp.com",
  projectId: "alimentos-29ade",
  storageBucket: "alimentos-29ade.appspot.com",
  messagingSenderId: "28130326094",
  appId: "1:28130326094:web:74007187301efb3af1751f",
  measurementId: "G-HBWJS0HEHK"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
// Para salvar no banco, use:
firebase.database().ref('participantes').push({
  nome: "Exemplo",
  acertos: 10,
  data: new Date().toISOString()
});

const alimentosData = [
  { src: "maca.webp", categoria: "in-natura", nome: "Maçã" },
  { src: "arroz.webp", categoria: "minimamente", nome: "Arroz" },
  { src: "refrigerante.webp", categoria: "ultraprocessado", nome: "Refrigerante" },
  { src: "cenoura.webp", categoria: "in-natura", nome: "Cenoura" },
  { src: "rabanete.webp", categoria: "in-natura", nome: "Rabanete" },
  { src: "pao.webp", categoria: "minimamente", nome: "Pão" },
  { src: "batatafrita.webp", categoria: "ultraprocessado", nome: "Batata Frita" },
  { src: "iogurte.webp", categoria: "minimamente", nome: "Iogurte" },
  { src: "pizza.webp", categoria: "ultraprocessado", nome: "Pizza" },
  { src: "leite.webp", categoria: "minimamente", nome: "Leite" },
  { src: "biscoito.webp", categoria: "ultraprocessado", nome: "Biscoito" },
  { src: "banana.webp", categoria: "in-natura", nome: "Banana" },
  { src: "alface.webp", categoria: "in-natura", nome: "Alface" },
  { src: "salsicha.webp", categoria: "ultraprocessado", nome: "Salsicha" },
  { src: "queijo.webp", categoria: "minimamente", nome: "Queijo" },
  { src: "biscoito_recheado.webp", categoria: "ultraprocessado", nome: "Biscoito Recheado" },
  { src: "pera.webp", categoria: "in-natura", nome: "Pera" },
  { src: "uva.webp", categoria: "in-natura", nome: "Uva" },
  { src: "laranja.webp", categoria: "in-natura", nome: "Laranja" },
  { src: "abacaxi.webp", categoria: "in-natura", nome: "Abacaxi" },
  { src: "manga.webp", categoria: "in-natura", nome: "Manga" },
  { src: "beterraba.webp", categoria: "in-natura", nome: "Beterraba" },
  { src: "tomate.webp", categoria: "in-natura", nome: "Tomate" },
  { src: "batata.webp", categoria: "in-natura", nome: "Batata" },
  { src: "abobrinha.webp", categoria: "in-natura", nome: "Abobrinha" },
  { src: "morango.webp", categoria: "in-natura", nome: "Morango" },
  { src: "feijao.webp", categoria: "minimamente", nome: "Feijão" },
  { src: "aveia.webp", categoria: "minimamente", nome: "Aveia" },
  { src: "farinha_trigo.webp", categoria: "minimamente", nome: "Farinha de Trigo" },
  { src: "milho.webp", categoria: "minimamente", nome: "Milho" },
  { src: "azeite.webp", categoria: "minimamente", nome: "Azeite" },
  { src: "frango.webp", categoria: "minimamente", nome: "Frango" },
  { src: "carne_bovina.webp", categoria: "minimamente", nome: "Carne Bovina" },
  { src: "peixe.webp", categoria: "minimamente", nome: "Peixe" },
  { src: "presunto.webp", categoria: "ultraprocessado", nome: "Presunto" },
  { src: "mortadela.webp", categoria: "ultraprocessado", nome: "Mortadela" },
  { src: "achocolatado.webp", categoria: "ultraprocessado", nome: "Achocolatado" },
  { src: "sorvete.webp", categoria: "ultraprocessado", nome: "Sorvete" },
  { src: "cereal_matinal.webp", categoria: "ultraprocessado", nome: "Cereal Matinal" },
  { src: "bala.webp", categoria: "ultraprocessado", nome: "Bala" },
  { src: "chocolate.webp", categoria: "ultraprocessado", nome: "Chocolate" },
  { src: "energetico.webp", categoria: "ultraprocessado", nome: "Energético" },
  { src: "macarrao_instantaneo.webp", categoria: "ultraprocessado", nome: "Macarrão Instantâneo" },
  { src: "hamburguer.webp", categoria: "ultraprocessado", nome: "Hambúrguer" },
  { src: "nuggets.webp", categoria: "ultraprocessado", nome: "Nuggets" },
  { src: "pipoca_micro.webp", categoria: "ultraprocessado", nome: "Pipoca de Micro-ondas" },
  { src: "suco_caixinha.webp", categoria: "ultraprocessado", nome: "Suco de Caixinha" },
  { src: "maionese.webp", categoria: "ultraprocessado", nome: "Maionese" },
  { src: "ketchup.webp", categoria: "ultraprocessado", nome: "Ketchup" },
  { src: "batata_palha.webp", categoria: "ultraprocessado", nome: "Batata Palha" },
  { src: "wafer.webp", categoria: "ultraprocessado", nome: "Wafer" },
  { src: "bolo_industrializado.webp", categoria: "ultraprocessado", nome: "Bolo Industrializado" },
  { src: "salgadinho.webp", categoria: "ultraprocessado", nome: "Salgadinho" },
  { src: "iogurte_saborizado.webp", categoria: "ultraprocessado", nome: "Iogurte Saborizado" }
];

const alimentosExplicacoes = {
  "maca.webp": "Fruta consumida em seu estado natural, sem passar por processos industriais ou aditivos.",
  "cenoura.webp": "Legume colhido e consumido fresco, rico em nutrientes e sem nenhuma alteração industrial.",
  "rabanete.webp": "Raiz natural consumida fresca e crua, sem qualquer tipo de processamento ou aditivos.",
  "banana.webp": "Consumida em seu estado natural, fresca e sem conservantes.",
  "alface.webp": "Verdura folhosa consumida fresca e crua, sem qualquer processamento.",
  "pera.webp": "Fruta fresca e natural, livre de aditivos ou processos químicos.",
  "uva.webp": "Consumida fresca e em seu estado natural direto da videira.",
  "laranja.webp": "Fruta cítrica consumida fresca, rica em vitamina C e sem aditivos.",
  "abacaxi.webp": "Fruta natural consumida fresca e sem conservantes.",
  "manga.webp": "Fruta fresca consumida in natura, sem processamento industrial.",
  "beterraba.webp": "Raiz natural consumida fresca ou cozida, sem adição de compostos químicos.",
  "tomate.webp": "Fruto natural consumido fresco, sem conservantes ou aditivos industriais.",
  "batata.webp": "Tubérculo consumido cozido ou assado em seu estado natural.",
  "abobrinha.webp": "Legume natural consumido fresco ou cozido, livre de aditivos.",
  "morango.webp": "Fruta fresca consumida in natura, sem aditivos industriais.",
  
  "arroz.webp": "Grão polido e embalado, processo simples necessário para o consumo sem aditivos.",
  "pao.webp": "O pão francês tradicional passa por fermentação simples de farinha, fermento, água e sal.",
  "iogurte.webp": "Iogurte natural obtido pela fermentação simples do leite por bactérias benéficas.",
  "leite.webp": "O leite pasteurizado passa por aquecimento térmico simples para eliminar bactérias, sem aditivos.",
  "queijo.webp": "Queijo tradicional obtido pela coagulação e fermentação simples do leite pasteurizado.",
  "feijao.webp": "Grão seco, limpo e embalado, pronto para cozimento sem adição de químicos.",
  "aveia.webp": "Cereal prensado em flocos para facilitar o consumo, sem ingredientes artificiais.",
  "farinha_trigo.webp": "Grão de trigo moído simples, sem adição de compostos químicos ou conservantes.",
  "milho.webp": "Grãos secos ou frescos descascados e limpos para consumo simples.",
  "azeite.webp": "Óleo extraído por prensagem a frio das azeitonas, processo físico simples.",
  "frango.webp": "Carne de ave fresca limpa e cortada, sem adição de sódio ou temperos industriais.",
  "carne_bovina.webp": "Carne bovina fresca cortada e embalada, sem aditivos ou conservantes.",
  "peixe.webp": "Peixe fresco limpo e congelado, sem aditivos ou temperos artificiais.",
  
  "refrigerante.webp": "Bebida artificial gasosa com alto teor de açúcar, corantes, aromatizantes e acidulantes.",
  "batatafrita.webp": "Batatas cortadas e fritas industrialmente, com conservantes e alto teor de sódio e gordura.",
  "pizza.webp": "Pizza industrializada congelada, cheia de gorduras saturadas, sódio e conservantes químicos.",
  "biscoito.webp": "Biscoito industrializado feito com gordura hidrogenada, açúcar refinado e aditivos.",
  "salsicha.webp": "Embutido ultraprocessado com sobras de carnes, sódio elevado, corantes e nitritos.",
  "biscoito_recheado.webp": "Alto teor de açúcar, gordura vegetal hidrogenada, emulsificantes e aromatizantes artificiais.",
  "presunto.webp": "Embutido industrial com adição excessiva de sal, conservantes (nitritos) e realçadores de sabor.",
  "mortadela.webp": "Carne mecanicamente separada com gordura, muito sal, corantes e conservantes artificiais.",
  "achocolatado.webp": "Pó industrial composto majoritariamente por açúcar, com pouco cacau e aromatizantes químicos.",
  "sorvete.webp": "Sorvete industrializado rico em gordura trans, açúcar, emulsificantes e corantes artificiais.",
  "cereal_matinal.webp": "Flocos de milho cobertos de açúcar, corantes e aditivos de sabor artificiais.",
  "bala.webp": "Doce feito inteiramente de açúcar refinado, xarope de glicose, corantes e aromatizantes artificiais.",
  "chocolate.webp": "Chocolate industrializado com alto teor de gordura hidrogenada, açúcar e aromatizantes.",
  "energetico.webp": "Bebida com altas doses de cafeína sintética, taurina, muito açúcar e conservantes artificiais.",
  "macarrao_instantaneo.webp": "Massa frita industrialmente acompanhada de tempero em pó com altíssimo teor de sódio e glutamato.",
  "hamburguer.webp": "Hambúrguer congelado industrializado com conservantes, gorduras adicionadas e alto teor de sódio.",
  "nuggets.webp": "Empanados industriais com restos de frango, farinha refinada, gordura e conservantes.",
  "pipoca_micro.webp": "Pipoca com gordura vegetal hidrogenada, aromatizantes artificiais de manteiga e excesso de sal.",
  "suco_caixinha.webp": "Bebida com baixo teor de fruta real, alto teor de açúcar ou adoçantes e corantes.",
  "maionese.webp": "Molho industrializado com óleos refinados, emulsificantes, conservantes e estabilizantes.",
  "ketchup.webp": "Molho industrializado com muito açúcar, vinagre, sal e conservantes artificiais.",
  "batata_palha.webp": "Frita industrialmente, rica em óleos vegetais refinados, sódio e conservantes para durabilidade.",
  "wafer.webp": "Biscoito ultraprocessado com gordura hidrogenada, açúcar elevado e aditivos químicos.",
  "bolo_industrializado.webp": "Bolo pronto de caixinha com conservantes para longa duração, gordura trans e aromatizantes.",
  "salgadinho.webp": "Salgadinho de pacote feito de milho ou batata frita com excesso de sódio, óleo refinado e corantes.",
  "iogurte_saborizado.webp": "Bebida láctea com corantes, aromatizantes artificiais de frutas e muito açúcar adicionado.",
  "ovo.webp": "Alimento in natura rico em proteínas e gorduras boas. Pode ser cozido, mexido ou frito em casa — o que importa é que não passa por nenhum processamento industrial antes de chegar ao prato.",
  "melancia.webp": "Fruta altamente hidratante consumida fresca e in natura, sem qualquer processamento.",
  "tapioca.webp": "Fécula extraída da mandioca que passa apenas por secagem e moagem física simples.",
  "margarina.webp": "Óleo vegetal refinado hidrogenado industrialmente com adição de corantes e conservantes químicos.",
  "cebola.webp": "Bulbo vegetal consumido in natura ou cozido, rico em nutrientes e sem aditivos industriais.",
  "alho.webp": "Condimento natural consumido em seu estado fresco, sem processos químicos.",
  "brocolis.webp": "Hortaliça fresca consumida in natura, sem alteração industrial.",
  "cafe_po.webp": "Grãos de café secos, torrados e moídos, sem adição de açúcar ou outros ingredientes.",
  "gelatina.webp": "Mistura industrial contendo açúcar, gelatinas artificiais, corantes, aromatizantes e aditivos químicos.",
  "suco_po.webp": "Refresco artificial desidratado com alto teor de açúcar ou adoçantes, corantes artificiais e aditivos químicos.",
  "castanhas.webp": "Sementes oleaginosas descascadas e secas, sem adição de sal, açúcar ou óleos.",
  "lentilha.webp": "Grão seco, limpo e embalado, pronto para o cozimento sem aditivos químicos.",
  "uva_passa.webp": "Uvas desidratadas fisicamente sob calor, concentrando seus açúcares naturais sem aditivos.",
  "cha_saquinho.webp": "Folhas e ervas secas e trituradas embaladas em sachês para infusão natural.",
  "erva_mate.webp": "Folhas de erva-mate secas e trituradas, usadas de forma simples para infusão com água quente.",
  "coco.webp": "Fruta consumida in natura, rica em gorduras boas e água de coco natural."
};

const fasesData = [
  // Fase 1: 8 alimentos
  [
    { src: "maca.webp", categoria: "in-natura", nome: "Maçã" },
    { src: "banana.webp", categoria: "in-natura", nome: "Banana" },
    { src: "cenoura.webp", categoria: "in-natura", nome: "Cenoura" },
    { src: "arroz.webp", categoria: "minimamente", nome: "Arroz" },
    { src: "feijao.webp", categoria: "minimamente", nome: "Feijão" },
    { src: "pao.webp", categoria: "minimamente", nome: "Pão" },
    { src: "refrigerante.webp", categoria: "ultraprocessado", nome: "Refrigerante" },
    { src: "batatafrita.webp", categoria: "ultraprocessado", nome: "Batata Frita" }
  ],
  // Fase 2: 10 alimentos
  [
    { src: "alface.webp", categoria: "in-natura", nome: "Alface" },
    { src: "morango.webp", categoria: "in-natura", nome: "Morango" },
    { src: "pera.webp", categoria: "in-natura", nome: "Pera" },
    { src: "leite.webp", categoria: "minimamente", nome: "Leite" },
    { src: "iogurte.webp", categoria: "minimamente", nome: "Iogurte" },
    { src: "ovo.webp", categoria: "in-natura", nome: "Ovo" },
    { src: "melancia.webp", categoria: "in-natura", nome: "Melancia" },
    { src: "pizza.webp", categoria: "ultraprocessado", nome: "Pizza" },
    { src: "salsicha.webp", categoria: "ultraprocessado", nome: "Salsicha" },
    { src: "biscoito_recheado.webp", categoria: "ultraprocessado", nome: "Biscoito Recheado" }
  ],
  // Fase 3: 12 alimentos
  [
    { src: "uva.webp", categoria: "in-natura", nome: "Uva" },
    { src: "tomate.webp", categoria: "in-natura", nome: "Tomate" },
    { src: "abacaxi.webp", categoria: "in-natura", nome: "Abacaxi" },
    { src: "queijo.webp", categoria: "minimamente", nome: "Queijo" },
    { src: "tapioca.webp", categoria: "minimamente", nome: "Tapioca" },
    { src: "cafe_po.webp", categoria: "minimamente", nome: "Café em Pó" },
    { src: "margarina.webp", categoria: "ultraprocessado", nome: "Margarina" },
    { src: "biscoito.webp", categoria: "ultraprocessado", nome: "Biscoito" },
    { src: "nuggets.webp", categoria: "ultraprocessado", nome: "Nuggets" },
    { src: "pipoca_micro.webp", categoria: "ultraprocessado", nome: "Pipoca de Micro-ondas" },
    { src: "batata.webp", categoria: "in-natura", nome: "Batata" },
    { src: "aveia.webp", categoria: "minimamente", nome: "Aveia" }
  ],
  // Fase 4: 12 alimentos
  [
    { src: "manga.webp", categoria: "in-natura", nome: "Manga" },
    { src: "beterraba.webp", categoria: "in-natura", nome: "Beterraba" },
    { src: "abobrinha.webp", categoria: "in-natura", nome: "Abobrinha" },
    { src: "frango.webp", categoria: "minimamente", nome: "Frango" },
    { src: "carne_bovina.webp", categoria: "minimamente", nome: "Carne Bovina" },
    { src: "cebola.webp", categoria: "in-natura", nome: "Cebola" },
    { src: "alho.webp", categoria: "in-natura", nome: "Alho" },
    { src: "brocolis.webp", categoria: "in-natura", nome: "Brócolis" },
    { src: "gelatina.webp", categoria: "ultraprocessado", nome: "Gelatina" },
    { src: "suco_po.webp", categoria: "ultraprocessado", nome: "Suco em Pó" },
    { src: "presunto.webp", categoria: "ultraprocessado", nome: "Presunto" },
    { src: "ketchup.webp", categoria: "ultraprocessado", nome: "Ketchup" }
  ],
  // Fase 5: 14 alimentos
  [
    { src: "rabanete.webp", categoria: "in-natura", nome: "Rabanete" },
    { src: "coco.webp", categoria: "in-natura", nome: "Coco" },
    { src: "erva_mate.webp", categoria: "minimamente", nome: "Erva-Mate" },
    { src: "castanhas.webp", categoria: "minimamente", nome: "Castanhas" },
    { src: "lentilha.webp", categoria: "minimamente", nome: "Lentilha" },
    { src: "uva_passa.webp", categoria: "minimamente", nome: "Uva Passa" },
    { src: "cha_saquinho.webp", categoria: "minimamente", nome: "Chá de Saquinho" },
    { src: "milho.webp", categoria: "minimamente", nome: "Milho" },
    { src: "azeite.webp", categoria: "minimamente", nome: "Azeite" },
    { src: "peixe.webp", categoria: "minimamente", nome: "Peixe" },
    { src: "mortadela.webp", categoria: "ultraprocessado", nome: "Mortadela" },
    { src: "sorvete.webp", categoria: "ultraprocessado", nome: "Sorvete" },
    { src: "cereal_matinal.webp", categoria: "ultraprocessado", nome: "Cereal Matinal" },
    { src: "macarrao_instantaneo.webp", categoria: "ultraprocessado", nome: "Macarrão Instantâneo" }
  ]
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let gameMode = 'tradicional';
let currentFase = 0;
let acertos = 0;
let erros = 0;
let errosCometidos = {}; // Registro de erros da rodada
let total = alimentosData.length;
let rodada = alimentosData;

// Variáveis e funções do Cronômetro
let secondsElapsed = 0;
let timerInterval = null;

function startTimer() {
  stopTimer(); // Evita múltiplos intervalos ativos
  secondsElapsed = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const timerDiv = document.getElementById('timer');
  if (timerDiv) {
    timerDiv.innerHTML = `Tempo: <span style="font-weight: bold; color: #222;">${formatTime(secondsElapsed)}</span>`;
  }
}

function showToast(message, type = 'error') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;

  container.appendChild(toast);

  // Remove o toast após a animação de fade-out
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 2500);
}

function renderAlimentos() {
  const alimentosDiv = document.getElementById('alimentos');
  if (!alimentosDiv) return;
  alimentosDiv.innerHTML = '';
  
  const faseIndicator = document.getElementById('fase-indicator');
  if (gameMode === 'tradicional') {
    if (faseIndicator) faseIndicator.style.display = 'none';
    alimentosDiv.classList.remove('modo-aventura');
    rodada = [...alimentosData];
  } else {
    if (faseIndicator) {
      faseIndicator.style.display = 'block';
      faseIndicator.innerText = `Fase ${currentFase + 1} de 5`;
    }
    alimentosDiv.classList.add('modo-aventura');
    rodada = [...fasesData[currentFase]];
  }
  
  total = rodada.length;
  shuffle(rodada);
  
  rodada.forEach((item, idx) => {
    const img = document.createElement('img');
    img.src = 'img/' + item.src;
    img.className = 'draggable';
    img.setAttribute('data-category', item.categoria);
    img.setAttribute('data-id', idx);
    img.setAttribute('draggable', true);
    img.setAttribute('alt', item.nome);
    img.title = item.nome;
    alimentosDiv.appendChild(img);
  });
}

function atualizarScore() {
  const scoreDiv = document.getElementById('score');
  if (!scoreDiv) return;
  scoreDiv.innerHTML = `
    <span style='color:#2ecc40; margin-right: 15px;'>Acertos: ${acertos} de ${total}</span>
    <span style='color:#e74c3c'>Erros: ${erros}</span>
  `;
}

function resetGame() {
  acertos = 0;
  erros = 0;
  currentFase = 0;
  errosCometidos = {}; // Limpa erros desta rodada
  
  // Esconde e limpa o contêiner de revisão de erros
  const errosReviewDiv = document.getElementById('erros-review');
  if (errosReviewDiv) errosReviewDiv.style.display = 'none';
  const errosListDiv = document.getElementById('errosList');
  if (errosListDiv) errosListDiv.innerHTML = '';

  // Limpar alimentos das zonas estáticas
  const dropZones = document.querySelectorAll('.drop-zones .drop-zone');
  dropZones.forEach(zone => {
    const itemsContainer = zone.querySelector('.items-container');
    if (itemsContainer) {
      itemsContainer.innerHTML = '';
    }
  });
  renderAlimentos();
  atualizarScore();
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('restartBtn').style.display = 'none';
  document.getElementById('nextPhaseBtn').style.display = 'none';
  enableDragAndDrop();
  startTimer(); // Inicia o cronômetro do zero
}

function startNextPhase() {
  currentFase++;
  acertos = 0;
  erros = 0;
  errosCometidos = {}; // Limpa erros para a nova fase
  
  // Esconde e limpa o contêiner de revisão de erros
  const errosReviewDiv = document.getElementById('erros-review');
  if (errosReviewDiv) errosReviewDiv.style.display = 'none';
  const errosListDiv = document.getElementById('errosList');
  if (errosListDiv) errosListDiv.innerHTML = '';

  // Limpar alimentos das zonas estáticas
  const dropZones = document.querySelectorAll('.drop-zones .drop-zone');
  dropZones.forEach(zone => {
    const itemsContainer = zone.querySelector('.items-container');
    if (itemsContainer) {
      itemsContainer.innerHTML = '';
    }
  });
  renderAlimentos();
  atualizarScore();
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('restartBtn').style.display = 'none';
  document.getElementById('nextPhaseBtn').style.display = 'none';
  enableDragAndDrop();
  startTimer(); // Inicia o cronômetro do zero para a fase
}

function enableDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const floatingDock = document.getElementById('floating-dock');

  draggables.forEach(item => {
    // Evita o arrasto nativo do navegador para imagens
    item.addEventListener('dragstart', e => e.preventDefault());
    
    // Adiciona listener de Pointer Events para o arrasto unificado
    item.addEventListener('pointerdown', onPointerDown);
  });

  let activePointerId = null;
  let dragItem = null;
  let dragClone = null;
  let startX = 0;
  let startY = 0;
  let initialRect = null;
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let currentHoveredZone = null;

  function onPointerDown(e) {
    if (this.getAttribute('draggable') === 'false' || this.dataset.placed === 'true') {
      return;
    }
    
    if (!e.isPrimary) return;

    activePointerId = e.pointerId;
    dragItem = this;
    startX = e.clientX;
    startY = e.clientY;
    initialRect = dragItem.getBoundingClientRect();
    
    offsetX = startX - initialRect.left;
    offsetY = startY - initialRect.top;

    isDragging = false;
    currentHoveredZone = null;

    dragItem.setPointerCapture(e.pointerId);
    dragItem.addEventListener('pointermove', onPointerMove);
    dragItem.addEventListener('pointerup', onPointerUp);
    dragItem.addEventListener('pointercancel', onPointerCancel);
  }

  function onPointerMove(e) {
    if (e.pointerId !== activePointerId) return;

    const currentX = e.clientX;
    const currentY = e.clientY;

    if (!isDragging) {
      const dist = Math.hypot(currentX - startX, currentY - startY);
      if (dist > 5) {
        isDragging = true;
        
        dragItem.classList.add('dragging-original');

        // Cria o clone de arrasto
        dragClone = document.createElement('img');
        dragClone.src = dragItem.src;
        dragClone.className = 'drag-clone';
        dragClone.style.width = `${initialRect.width}px`;
        dragClone.style.height = `${initialRect.height}px`;
        dragClone.style.left = `${initialRect.left}px`;
        dragClone.style.top = `${initialRect.top}px`;
        document.body.appendChild(dragClone);

        // Ativa a doca flutuante e destaca o nome do alimento
        const dockTitle = floatingDock.querySelector('.floating-dock-title');
        if (dockTitle) {
          dockTitle.innerHTML = `Classifique: <span class="food-name-highlight">${dragItem.title}</span>`;
        }
        floatingDock.classList.add('active');
      }
    }

    if (isDragging && dragClone) {
      dragClone.style.left = `${currentX - offsetX}px`;
      dragClone.style.top = `${currentY - offsetY}px`;

      const hitElement = document.elementFromPoint(currentX, currentY);
      const targetZone = hitElement ? hitElement.closest('.drop-zone') : null;

      if (targetZone) {
        if (currentHoveredZone !== targetZone) {
          if (currentHoveredZone) {
            currentHoveredZone.classList.remove('hovered');
          }
          currentHoveredZone = targetZone;
          currentHoveredZone.classList.add('hovered');
        }
      } else {
        if (currentHoveredZone) {
          currentHoveredZone.classList.remove('hovered');
          currentHoveredZone = null;
        }
      }
    }
  }

  function onPointerUp(e) {
    if (e.pointerId !== activePointerId) return;

    cleanupPointerListeners();
    floatingDock.classList.remove('active');

    if (isDragging) {
      const currentX = e.clientX;
      const currentY = e.clientY;

      const hitElement = document.elementFromPoint(currentX, currentY);
      const targetZone = hitElement ? hitElement.closest('.drop-zone') : null;

      if (targetZone) {
        if (currentHoveredZone) {
          currentHoveredZone.classList.remove('hovered');
        }

        const expectedCategory = targetZone.dataset.accept;
        const draggedCategory = dragItem.dataset.category;

        if (expectedCategory === draggedCategory) {
          targetZone.classList.add('correct');
          setTimeout(() => targetZone.classList.remove('correct'), 800);

          const staticZone = document.querySelector(`.drop-zones .drop-zone[data-accept="${draggedCategory}"]`);
          const itemsContainer = staticZone.querySelector('.items-container') || staticZone;

          dragItem.classList.remove('dragging-original');
          dragItem.setAttribute('draggable', 'false');
          dragItem.dataset.placed = 'true';
          dragItem.style.cursor = 'default';
          
          itemsContainer.appendChild(dragItem);
          const finalRect = dragItem.getBoundingClientRect();
          
          if (dragClone) {
            dragClone.style.transition = 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            dragClone.style.left = `${finalRect.left}px`;
            dragClone.style.top = `${finalRect.top}px`;
            dragClone.style.transform = 'scale(1)';
            dragClone.style.boxShadow = 'none';
            
            const tempClone = dragClone;
            setTimeout(() => {
              if (tempClone && tempClone.parentNode) {
                tempClone.parentNode.removeChild(tempClone);
              }
            }, 350);
            dragClone = null;
          }

          acertos++;
          atualizarScore();
          document.getElementById('feedback').innerHTML = "<span style='color:#2ecc40'>Acertou! 🎉</span>";
          if (acertos === total) {
            stopTimer();
            const finalTimeStr = formatTime(secondsElapsed);
            const textoErros = erros === 1 ? 'erro' : 'erros';
            const nomeDoJogador = localStorage.getItem('playerName') || 'Anônimo';

            if (gameMode === 'fases') {
              if (currentFase < 4) {
                document.getElementById('feedback').innerHTML = `<span style='color:#007bff'>Parabéns! Você concluiu a Fase ${currentFase + 1} em ${finalTimeStr} com ${erros} ${textoErros}! 🌟</span>`;
                document.getElementById('nextPhaseBtn').style.display = 'block';
                document.getElementById('restartBtn').style.display = 'none';
              } else {
                document.getElementById('feedback').innerHTML = `<span style='color:#007bff'>Parabéns! Você completou TODAS as fases! Fase 5 finalizada em ${finalTimeStr} com ${erros} ${textoErros}! Você é um Mestre! 🏆</span>`;
                document.getElementById('restartBtn').style.display = 'block';
                document.getElementById('nextPhaseBtn').style.display = 'none';
              }
              
              // Salvar no Firebase (modo fases)
              firebase.database().ref('participantes_fases').push({
                nome: nomeDoJogador,
                fase: currentFase + 1,
                acertos: acertos,
                erros: erros,
                tempo: finalTimeStr,
                tempoSegundos: secondsElapsed,
                data: new Date().toISOString()
              });
            } else {
              document.getElementById('feedback').innerHTML = `<span style='color:#007bff'>Parabéns! Você acertou todos em ${finalTimeStr} com ${erros} ${textoErros}! 🏆</span>`;
              document.getElementById('restartBtn').style.display = 'block';
              document.getElementById('nextPhaseBtn').style.display = 'none';

              // Salvar no Firebase tradicional
              firebase.database().ref('participantes').push({
                nome: nomeDoJogador,
                acertos: acertos,
                erros: erros,
                tempo: finalTimeStr,
                tempoSegundos: secondsElapsed,
                data: new Date().toISOString()
              });
            }

            // Mostrar revisão de erros se houver erros cometidos nesta fase/rodada
            const errosReviewDiv = document.getElementById('erros-review');
            const errosListDiv = document.getElementById('errosList');
            if (errosListDiv) errosListDiv.innerHTML = '';
            
            const errosArray = Object.values(errosCometidos);
            if (errosReviewDiv && errosListDiv) {
              if (errosArray.length > 0) {
                errosArray.forEach(erro => {
                  const img = document.createElement('img');
                  img.src = erro.src;
                  img.className = 'erro-item';
                  img.alt = erro.nome;
                  img.title = erro.nome;
                  img.onclick = () => showFoodDetailModal(erro);
                  errosListDiv.appendChild(img);
                });
                errosReviewDiv.style.display = 'block';
              } else {
                errosReviewDiv.style.display = 'none';
              }
            }
          }
        } else {
          targetZone.classList.add('wrong');
          setTimeout(() => targetZone.classList.remove('wrong'), 1000);

          erros++;
          atualizarScore();

          const categoryNames = {
            'in-natura': 'In Natura',
            'minimamente': 'Minimamente Processado',
            'ultraprocessado': 'Ultraprocessado'
          };
          const targetCategoryName = categoryNames[expectedCategory] || expectedCategory;
          const correctCategoryName = categoryNames[draggedCategory] || draggedCategory;
          const foodName = dragItem.title || dragItem.getAttribute('alt');
          const foodSrc = dragItem.getAttribute('src');
          const foodFilename = foodSrc.split('/').pop(); // Extrair apenas 'maca.webp' de 'img/maca.webp'

          // Registrar o erro cometido
          if (!errosCometidos[foodName]) {
            errosCometidos[foodName] = {
              nome: foodName,
              src: foodSrc, // mantém img/maca.webp para exibir na UI
              escolha: targetCategoryName,
              correta: correctCategoryName,
              explicacao: alimentosExplicacoes[foodFilename] || 'Sem explicação disponível.'
            };
          }
          
          showToast(`${foodName} não é ${targetCategoryName}! ❌`, 'error');

          document.getElementById('feedback').innerHTML = "<span style='color:#e74c3c'>Tente novamente! ❌</span>";
          setTimeout(() => {
            document.getElementById('feedback').innerHTML = '';
          }, 1500);

          if (dragClone) {
            dragClone.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            dragClone.style.left = `${initialRect.left}px`;
            dragClone.style.top = `${initialRect.top}px`;
            dragClone.style.transform = 'scale(1)';
            
            const tempClone = dragClone;
            const tempItem = dragItem;
            setTimeout(() => {
              if (tempClone && tempClone.parentNode) {
                tempClone.parentNode.removeChild(tempClone);
              }
              if (tempItem) {
                tempItem.classList.remove('dragging-original');
              }
            }, 400);
            dragClone = null;
          } else {
            dragItem.classList.remove('dragging-original');
          }
        }
      } else {
        flyBackItem();
      }
    }

    resetDragState();
  }

  function onPointerCancel(e) {
    if (e.pointerId !== activePointerId) return;
    cleanupPointerListeners();
    floatingDock.classList.remove('active');
    if (isDragging) {
      flyBackItem();
    }
    resetDragState();
  }

  function flyBackItem() {
    if (dragClone) {
      dragClone.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      dragClone.style.left = `${initialRect.left}px`;
      dragClone.style.top = `${initialRect.top}px`;
      dragClone.style.transform = 'scale(1)';
      
      const tempClone = dragClone;
      const tempItem = dragItem;
      setTimeout(() => {
        if (tempClone && tempClone.parentNode) {
          tempClone.parentNode.removeChild(tempClone);
        }
        if (tempItem) {
          tempItem.classList.remove('dragging-original');
        }
      }, 400);
      dragClone = null;
    } else if (dragItem) {
      dragItem.classList.remove('dragging-original');
    }
  }

  function cleanupPointerListeners() {
    if (dragItem) {
      try {
        dragItem.releasePointerCapture(activePointerId);
      } catch (err) {
        // Ignora erro se a captura já tiver sido liberada
      }
      dragItem.removeEventListener('pointermove', onPointerMove);
      dragItem.removeEventListener('pointerup', onPointerUp);
      dragItem.removeEventListener('pointercancel', onPointerCancel);
    }
  }

  function resetDragState() {
    activePointerId = null;
    dragItem = null;
    isDragging = false;
    currentHoveredZone = null;
    
    // Restaura o título padrão da doca
    const dockTitle = floatingDock.querySelector('.floating-dock-title');
    if (dockTitle) {
      dockTitle.innerHTML = 'Classifique o alimento:';
    }
  }
}

// Login simples para registrar o nome do jogador
document.addEventListener('DOMContentLoaded', function() {
  const loginArea = document.getElementById('login-area');
  const gameArea = document.getElementById('game-area');
  const startBtn = document.getElementById('startBtn');
  const playerNameInput = document.getElementById('playerName');
  const scoreDiv = document.getElementById('score');

  // Lógica de seleção de modo de jogo
  const modeCards = document.querySelectorAll('.mode-selection .mode-card');
  modeCards.forEach(card => {
    card.onclick = function() {
      modeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      gameMode = card.getAttribute('data-mode');
    };
  });

  // Preenche o nome se já estiver salvo
  if (localStorage.getItem('playerName')) {
    playerNameInput.value = localStorage.getItem('playerName');
  }

  startBtn.onclick = function() {
    const name = playerNameInput.value.trim();
    if (name.length < 2) {
      alert('Digite um nome válido!');
      return;
    }
    localStorage.setItem('playerName', name);
    loginArea.style.display = 'none';
    gameArea.style.display = '';
    showPlayerName();
    
    // Inicializa a rodada com base no modo de jogo escolhido
    renderAlimentos();
    atualizarScore();
    enableDragAndDrop();
    
    startTimer(); // Inicia o cronômetro!
  };

  function showPlayerName() {
    const name = localStorage.getItem('playerName');
    const playerInfo = document.getElementById('player-info');
    const playerDisplayName = document.getElementById('player-display-name');
    if (name && playerInfo && playerDisplayName) {
      playerDisplayName.innerText = name;
      playerInfo.style.display = 'flex';
    }
  }

  // Lógica de logout (sair/mudar de jogador)
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.onclick = logout;
  }

  // Lógica do Modal de Ajuda
  const helpBtn = document.getElementById('helpBtn');
  const helpModal = document.getElementById('help-modal');
  const closeHelpBtn = document.getElementById('closeHelpBtn');
  const modalCloseBtn = helpModal.querySelector('.modal-close-btn');

  if (helpBtn && helpModal) {
    helpBtn.onclick = function() {
      helpModal.classList.add('active');
    };

    function closeHelp() {
      helpModal.classList.remove('active');
    }

    closeHelpBtn.onclick = closeHelp;
    modalCloseBtn.onclick = closeHelp;
    helpModal.onclick = function(e) {
      if (e.target === helpModal) {
        closeHelp();
      }
    };
  }

  // Lógica do Modal de Detalhe do Alimento
  const foodModal = document.getElementById('food-modal');
  const closeFoodModalBtn = document.getElementById('closeFoodModalBtn');
  const foodModalCloseBtn = foodModal ? foodModal.querySelector('.modal-close-btn') : null;

  if (foodModal && closeFoodModalBtn) {
    function closeFoodModal() {
      foodModal.classList.remove('active');
    }
    closeFoodModalBtn.onclick = closeFoodModal;
    if (foodModalCloseBtn) foodModalCloseBtn.onclick = closeFoodModal;
    foodModal.onclick = function(e) {
      if (e.target === foodModal) {
        closeFoodModal();
      }
    };
  }
});

function showFoodDetailModal(erro) {
  const foodModal = document.getElementById('food-modal');
  if (!foodModal) return;

  const modalImg = document.getElementById('foodModalImg');
  const modalName = document.getElementById('foodModalName');
  const modalChoice = document.getElementById('foodModalYourChoice');
  const modalCorrect = document.getElementById('foodModalCorrect');
  const modalDesc = document.getElementById('foodModalDesc');

  if (modalImg) modalImg.src = erro.src;
  if (modalImg) modalImg.alt = erro.nome;
  if (modalName) modalName.innerText = erro.nome;
  if (modalChoice) modalChoice.innerText = erro.escolha;
  if (modalCorrect) modalCorrect.innerText = erro.correta;
  if (modalDesc) modalDesc.innerText = erro.explicacao;

  foodModal.classList.add('active');
}

function logout() {
  localStorage.removeItem('playerName');
  stopTimer();
  
  // Reseta variáveis do jogo para o próximo jogador
  gameMode = 'tradicional';
  currentFase = 0;
  acertos = 0;
  erros = 0;
  errosCometidos = {};
  
  // Resetar visual dos cards de modo no login
  const modeCards = document.querySelectorAll('.mode-selection .mode-card');
  modeCards.forEach(c => c.classList.remove('active'));
  const defaultModeCard = document.getElementById('mode-tradicional');
  if (defaultModeCard) defaultModeCard.classList.add('active');

  // Limpar alimentos das caixas estáticas
  const dropZones = document.querySelectorAll('.drop-zones .drop-zone');
  dropZones.forEach(zone => {
    const itemsContainer = zone.querySelector('.items-container');
    if (itemsContainer) itemsContainer.innerHTML = '';
  });
  
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('restartBtn').style.display = 'none';
  const nextPhaseBtn = document.getElementById('nextPhaseBtn');
  if (nextPhaseBtn) nextPhaseBtn.style.display = 'none';
  const faseIndicator = document.getElementById('fase-indicator');
  if (faseIndicator) faseIndicator.style.display = 'none';
  
  const errosReviewDiv = document.getElementById('erros-review');
  if (errosReviewDiv) errosReviewDiv.style.display = 'none';
  const errosListDiv = document.getElementById('errosList');
  if (errosListDiv) errosListDiv.innerHTML = '';
  
  renderAlimentos();
  atualizarScore();
  
  // Troca de telas
  const loginArea = document.getElementById('login-area');
  const gameArea = document.getElementById('game-area');
  const playerInfo = document.getElementById('player-info');
  const playerNameInput = document.getElementById('playerName');
  
  if (loginArea) loginArea.style.display = '';
  if (gameArea) gameArea.style.display = 'none';
  if (playerInfo) playerInfo.style.display = 'none';
  if (playerNameInput) playerNameInput.value = '';
}

document.getElementById('restartBtn').onclick = resetGame;
const nextPhaseBtn = document.getElementById('nextPhaseBtn');
if (nextPhaseBtn) {
  nextPhaseBtn.onclick = startNextPhase;
}

// Inicialização
renderAlimentos();
atualizarScore();
enableDragAndDrop();
